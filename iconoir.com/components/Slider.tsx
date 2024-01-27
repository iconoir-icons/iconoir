import { useFocusRing } from '@react-aria/focus';
import { useNumberFormatter } from '@react-aria/i18n';
import { useSlider, useSliderThumb } from '@react-aria/slider';
import { mergeProps } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SliderState, useSliderState } from '@react-stately/slider';
import { SliderProps as ReactSliderProps } from '@react-types/slider';
import React from 'react';
import styled from 'styled-components';
import { Text13 } from './Typography';

export interface SliderProps extends ReactSliderProps<number[]> {
  formatOptions?: Parameters<typeof useNumberFormatter>[0];
}
export function Slider(props: SliderProps) {
  let trackRef = React.useRef(null);
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef,
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
    state,
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
              ? 'var(--g6)'
              : 'var(--white)',
          scale: isFocusVisible
            ? '1.0'
            : state.isThumbDragging(index)
              ? '1.3'
              : '1.0',
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
  margin-bottom: 6px;
`;
const Track = styled.div`
  position: relative;
  height: 30px;
  width: 100%;
`;
const TrackBackground = styled.div`
  position: absolute;
  height: 2px;
  top: 15px;
  background: var(--black);
  width: 100%;
`;
const ThumbContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
`;
const ThumbInner = styled.div`
  width: 24px;
  height: 24px;
  border: solid 2px var(--black);
  box-shadow: 0px 3px 0px 0px var(--g0);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    scale: 1.2;
  }
`;
