import type { IconListCustomizations } from './IconList';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { ResetButton as BaseResetButton } from './Button';
import { DEFAULT_CUSTOMIZATIONS } from './IconList';
import { ColorInput } from './Input';
import { Slider } from './Slider';
import { Eyebrow, Mono, Text14 } from './Typography';

const CustomizationBox = styled.div`
  display: none;
  margin: 16px 0;
  padding: 20px;
  border-radius: 20px;
  background: var(--white);
  ${media.md} {
    display: block;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  ${Eyebrow} {
    margin: 0;
  }
`;

const Field = styled.div`
  margin-bottom: 16px;
`;

const HorizontalField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ResetButton = styled(BaseResetButton)`
  &&& {
    height: 28px;
    padding: 0 12px;
    border-radius: 999px;
    corner-shape: superellipse(1.6);
    background: var(--gray-btn);
    color: var(--black);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
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
  height: 32px;
  padding: 0 12px 0 6px;
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
    <CustomizationBox>
      <Header>
        <Eyebrow>Customize</Eyebrow>
        <ResetButton onClick={() => onChange(DEFAULT_CUSTOMIZATIONS)}>
          Reset
        </ResetButton>
      </Header>
      <Field>
        <Slider
          label="Optical size"
          minValue={16}
          maxValue={64}
          value={[size]}
          formatOptions={{ maximumFractionDigits: 0 }}
          onChange={(values) => {
            setSize(values[0]);
            updateCustomizations({ size: values[0] });
          }}
        />
      </Field>
      <Field>
        <Slider
          label="Stroke weight"
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
      </Field>
      <HorizontalField>
        <Text14>Color</Text14>
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
      </HorizontalField>
    </CustomizationBox>
  );
}
