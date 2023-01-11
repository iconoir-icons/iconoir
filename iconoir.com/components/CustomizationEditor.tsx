import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { DEFAULT_CUSTOMIZATIONS, IconListCustomizations } from './IconList';
import { ColorInput } from './Input';
import { Slider } from './Slider';
import { Text13, Text18 } from './Typography';

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
    customizations.strokeWidth
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
      <Header>
        <Text18 style={{ fontWeight: 700, color: 'var(--black)' }}>
          Customize
        </Text18>
        <Button onClick={() => onChange(DEFAULT_CUSTOMIZATIONS)}>Reset</Button>
      </Header>
      <Field>
        <Slider
          label={'Size'}
          minValue={12}
          maxValue={128}
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
          label={'Stroke Width'}
          minValue={0.5}
          maxValue={3}
          value={[strokeWidth]}
          step={0.01}
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
      </HorizontalField>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
`;
const Field = styled.div`
  margin-bottom: 35px;
`;
const HorizontalField = styled(Field)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
