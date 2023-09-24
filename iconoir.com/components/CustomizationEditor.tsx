import React from 'react';
import styled from 'styled-components';
import { DEFAULT_CUSTOMIZATIONS, IconListCustomizations } from './IconList';
import { ColorButton, ColorInput } from './Input';
import { Slider } from './Slider';
import { Text13, Text15 } from './Typography';
import { media } from '../lib/responsive';

export interface CustomizationEditorProps {
  customizations: IconListCustomizations;
  // eslint-disable-next-line no-unused-vars
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
    <>
      <CustomizationBox>
        <Header>
          <Text15 style={{ fontWeight: 700, color: 'var(--black)' }}>
            Customize
          </Text15>
          <ResetButton onClick={() => onChange(DEFAULT_CUSTOMIZATIONS)}>
            Reset
          </ResetButton>
        </Header>
        <Field>
          <Slider
            label={'Optical Size'}
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
            label={'Stroke Weight'}
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
          <Text13>Color</Text13>
          <ColorInput
            type={'color'}
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              updateCustomizations({ hexColor: e.target.value });
            }}
          />
          <ColorButton />
        </HorizontalField>
      </CustomizationBox>
    </>
  );
}

const CustomizationBox = styled.div`
  background-color: var(--g7);
  width: 84%;
  padding: 8%;
  border-radius: 10px;
  margin: 24px 0;
  display: none;
  ${media.md} {
    display: block;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: solid 1px var(--g6);
  padding-bottom: 10px;
`;
const Field = styled.div`
  margin-bottom: 24px;
`;
const HorizontalField = styled(Field)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ResetButton = styled(Field)`
  margin: initial;
  text-decoration: underline;
  color: var(--dark-gray);
  font-size: 13px;

  &:hover {
    color: var(--black);
    cursor: pointer;
  }
`;
