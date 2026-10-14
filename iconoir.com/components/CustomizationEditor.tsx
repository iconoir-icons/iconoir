import type { IconListCustomizations } from './IconList';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { ResetButton as BaseResetButton } from './Button';
import { DEFAULT_CUSTOMIZATIONS } from './IconList';
import { ColorInput } from './Input';
import { Slider } from './Slider';
import { Mono } from './Typography';

/** Size, stroke and color controls, laid out in a row for the explorer toolbar. */
const Controls = styled.div`
  display: none;
  align-items: center;
  gap: 24px;
  ${media.md} {
    display: flex;
  }
`;

const SliderField = styled.div`
  width: 200px;
`;

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ResetButton = styled(BaseResetButton)`
  &&& {
    height: 36px;
    padding: 0 14px;
    border-radius: 999px;
    corner-shape: superellipse(1.6);
    background: var(--gray-btn);
    color: var(--black);
    font-size: 13px;
    font-weight: 500;
    cursor: var(--cursor-pointer);
    transition: background 0.15s;
    &:hover {
      background: var(--gray-btn-hover);
    }
  }
`;

const ColorField = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px 0 8px;
  border-radius: 999px;
  background: var(--gray-btn);
  transition: background 0.15s;
  &:hover {
    background: var(--gray-btn-hover);
  }
  &:focus-within {
    outline: 2px solid var(--black);
    outline-offset: 2px;
  }
  ${Mono} {
    color: var(--black);
    text-transform: uppercase;
  }
`;

const Swatch = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

export interface CustomizationEditorProps {
  customizations: IconListCustomizations;
  onChange: (customizations: IconListCustomizations) => void;
}

export function CustomizationEditor({
  customizations,
  onChange,
}: CustomizationEditorProps) {
  const [, startTransition] = (React as any).useTransition();
  const [color, setColor] = React.useState(customizations.hexColor);
  const [size, setSize] = React.useState(customizations.size);

  const [strokeWidth, setStrokeWidth] = React.useState(
    customizations.strokeWidth,
  );

  React.useEffect(() => {
    setColor(customizations.hexColor);
    setSize(customizations.size);
    setStrokeWidth(customizations.strokeWidth);
  }, [customizations]);

  function updateCustomizations(partial: Partial<IconListCustomizations>) {
    startTransition(() => {
      onChange({
        ...customizations,
        ...partial,
      });
    });
  }

  return (
    <Controls>
      <SliderField>
        <Slider
          label="Size"
          minValue={16}
          maxValue={64}
          value={[size]}
          formatOptions={{ maximumFractionDigits: 0 }}
          onChange={(values) => {
            setSize(values[0]);
            updateCustomizations({ size: values[0] });
          }}
        />
      </SliderField>
      <SliderField>
        <Slider
          label="Stroke"
          minValue={0.5}
          maxValue={3}
          value={[strokeWidth]}
          step={0.1}
          formatOptions={{ maximumFractionDigits: 1 }}
          onChange={(values) => {
            setStrokeWidth(values[0]);
            updateCustomizations({ strokeWidth: values[0] });
          }}
        />
      </SliderField>
      <ColorRow>
        <ColorField>
          <Swatch style={{ background: color }} />
          <Mono>{color}</Mono>
          <ColorInput
            type="color"
            aria-label="Icon color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              updateCustomizations({ hexColor: e.target.value });
            }}
          />
        </ColorField>
        <ResetButton onClick={() => onChange(DEFAULT_CUSTOMIZATIONS)}>
          Reset
        </ResetButton>
      </ColorRow>
    </Controls>
  );
}
