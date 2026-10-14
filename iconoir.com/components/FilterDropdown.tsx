import { Check, NavArrowDown } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { ResetButton } from './Button';

const Wrapper = styled.div`
  position: relative;
  flex: none;
`;

/** Secondary pill, sized to sit beside the search field. */
const Trigger = styled(ResetButton)`
  &&& {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 44px;
    padding: 0 10px 0 14px;
    border-radius: 999px;
    corner-shape: superellipse(1.6);
    background: var(--gray-btn);
    color: var(--black);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.012em;
    white-space: nowrap;
    cursor: var(--cursor-pointer);
    transition: background 0.15s;
    &:hover,
    &[aria-expanded='true'] {
      background: var(--gray-btn-hover);
    }
    &:focus-visible {
      outline: 2px solid var(--black);
      outline-offset: 2px;
    }
    > span {
      max-width: 56px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* Narrow screens keep most of the row for the search field. */
    ${media.md} {
      padding: 0 14px 0 18px;
      > span {
        max-width: 120px;
      }
    }
    svg {
      width: 16px;
      height: 16px;
      flex: none;
    }
    > svg:first-child {
      width: 18px;
      height: 18px;
      margin-left: -2px;
    }
    > svg:last-child {
      color: var(--muted);
      transition: transform 0.2s;
    }
    &[aria-expanded='true'] > svg:last-child {
      transform: rotate(180deg);
    }
  }
`;

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 10;
  min-width: 100%;
  max-height: min(420px, calc(100vh - 200px));
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  padding: 6px;
  border-radius: 16px;
  background: var(--white);
  border: 1px solid var(--line);
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.25);
`;

const Option = styled(ResetButton)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    height: 36px;
    padding: 0 10px 0 12px;
    border-radius: 10px;
    color: var(--black);
    font-size: 14px;
    text-align: left;
    white-space: nowrap;
    cursor: var(--cursor-pointer);
    &:hover,
    &:focus-visible {
      background: var(--gray-btn);
    }
    svg {
      width: 16px;
      height: 16px;
      flex: none;
    }
  }
`;

const OptionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  &&& svg {
    width: 18px;
    height: 18px;
  }
`;

export interface FilterDropdownOption {
  value: string | undefined;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
}

/** Explicit props: the explorer's IconoirProvider would restyle the icons. */
const ICON_PROPS = {
  color: 'currentColor',
  width: 16,
  height: 16,
  strokeWidth: 1.5,
};

/** Option icons (e.g. the style variants) read a little larger. */
const OPTION_ICON_PROPS = {
  ...ICON_PROPS,
  width: 18,
  height: 18,
  strokeWidth: 2,
};

export interface FilterDropdownProps {
  /** Accessible name, e.g. "Style". */
  label: string;
  /** Shown on the button while the first ("All") option is selected. */
  allLabel: string;
  options: FilterDropdownOption[];
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

export function FilterDropdown({
  label,
  allLabel,
  options,
  value,
  onChange,
}: FilterDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuId = React.useId();

  const selected = options.find((option) => option.value === value);
  const buttonLabel = selected?.value === undefined ? allLabel : selected.label;
  const SelectedIcon = selected?.value === undefined ? undefined : selected.icon;

  // Close on outside clicks; focus the selected option when opening.
  React.useEffect(() => {
    if (!open)
      return;

    const items = menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitemradio"]');
    const index = Math.max(0, options.findIndex((option) => option.value === value));
    items?.[index]?.focus({ preventScroll: false });

    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node))
        setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);

    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onMenuKeyDown(e: React.KeyboardEvent) {
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitemradio"]') ?? [],
    );

    const current = items.indexOf(document.activeElement as HTMLElement);

    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'Tab') {
      setOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[(current + 1) % items.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(current - 1 + items.length) % items.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Trigger
        ref={triggerRef}
        type="button"
        aria-label={`${label}: ${buttonLabel}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' && !open) {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        {SelectedIcon && <SelectedIcon {...OPTION_ICON_PROPS} />}
        <span>{buttonLabel}</span>
        <NavArrowDown {...ICON_PROPS} />
      </Trigger>
      {open && (
        <Menu
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={label}
          onKeyDown={onMenuKeyDown}
        >
          {options.map((option) => {
            const checked = option.value === value;

            return (
              <Option
                key={option.label}
                type="button"
                role="menuitemradio"
                aria-checked={checked}
                tabIndex={-1}
                onClick={() => {
                  onChange(option.value);
                  close();
                }}
              >
                <OptionLabel>
                  {option.icon && <option.icon {...OPTION_ICON_PROPS} />}
                  {option.label}
                </OptionLabel>
                {checked && <Check {...ICON_PROPS} />}
              </Option>
            );
          })}
        </Menu>
      )}
    </Wrapper>
  );
}
