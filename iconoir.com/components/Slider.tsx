import React from 'react';
import { useSlider, useSliderThumb } from '@react-aria/slider';
import { SliderState, useSliderState } from '@react-stately/slider';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { mergeProps } from '@react-aria/utils';
import { useNumberFormatter } from '@react-aria/i18n';
import { SliderProps as ReactSliderProps } from '@react-types/slider';
import { NumberFormatOptions } from '@internationalized/number';
import styled from 'styled-components';
import { Text13 } from './Typography';

export interface SliderProps extends ReactSliderProps<number[]> {
  formatOptions?: NumberFormatOptions;
}
export function Slider(props: SliderProps) {
  let trackRef = React.useRef(null);
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  return (
    <SliderContainer {...groupProps}>
      <SliderHeader>
        {props.label && (
          <Text13 as={'label'} {...labelProps}>
            {props.label}
          </Text13>
        )}
        <Output as={'output'} {...outputProps}>
          {state.getThumbValueLabel(0)}
        </Output>
      </SliderHeader>
      <Track {...trackProps} ref={trackRef}>
        <TrackBackground />
        <Thumb index={0} state={state} trackRef={trackRef} />
      </Track>
    </SliderContainer>
  );
}

interface ThumbProps {
  state: SliderState;
  trackRef: React.RefObject<HTMLElement>;
  index: number;
}
function Thumb({ state, trackRef, index }: ThumbProps) {
  let inputRef = React.useRef(null);
  let { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <ThumbContainer
      style={{
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <ThumbInner
        {...thumbProps}
        style={{
          backgroundColor: isFocusVisible
            ? 'var(--accent)'
            : state.isThumbDragging(index)
            ? 'var(--accent)'
            : 'var(--black)',
        }}
      >
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </ThumbInner>
    </ThumbContainer>
  );
}

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  touch-action: none;
`;
const SliderHeader = styled.div`
  display: flex;
  align-self: stretch;
`;
const Output = styled(Text13)`
  flex: 1 0 auto;
  text-align: end;
  margin-bottom: 10px;
`;
const Track = styled.div`
  position: relative;
  height: 30px;
  width: 100%;
`;
const TrackBackground = styled.div`
  position: absolute;
  height: 3px;
  top: 13px;
  background: #f4f3f4;
  width: 100%;
`;
const ThumbContainer = styled.div`
  position: absolute;
  top: 4px;
  transform: translateX(-50%);
`;
const ThumbInner = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
