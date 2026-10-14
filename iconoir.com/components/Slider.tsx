import type { SliderState } from '@react-stately/slider';
import type { SliderProps as ReactSliderProps } from '@react-types/slider';
import { useFocusRing } from '@react-aria/focus';
import { useNumberFormatter } from '@react-aria/i18n';
import { useSlider, useSliderThumb } from '@react-aria/slider';
import { mergeProps } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useSliderState } from '@react-stately/slider';
import React from 'react';
import styled from 'styled-components';
import { Mono, Text14 } from './Typography';

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
  align-items: baseline;
  align-self: stretch;
  margin-bottom: 4px;
`;

const Output = styled(Mono)`
  flex: 1 0 auto;
  text-align: end;
  color: var(--black);
`;

const Track = styled.div`
  position: relative;
  height: 28px;
  width: 100%;
  cursor: pointer;
`;

const TrackBackground = styled.div`
  position: absolute;
  height: 4px;
  top: 12px;
  border-radius: 999px;
  background: var(--gray-btn);
  width: 100%;
`;

const TrackFill = styled.div`
  position: absolute;
  left: 0;
  height: 4px;
  top: 12px;
  border-radius: 999px;
  background: var(--black);
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
  background: var(--white);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.08),
    0 1px 4px rgba(0, 0, 0, 0.2);
  cursor: grab;
  transition: scale 0.15s;
  &:hover {
    scale: 1.1;
  }
`;

export interface SliderProps extends ReactSliderProps<number[]> {
  formatOptions?: Parameters<typeof useNumberFormatter>[0];
}

export function Slider(props: SliderProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const numberFormatter = useNumberFormatter(props.formatOptions);
  const state = useSliderState({ ...props, numberFormatter });

  const { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef,
  );

  return (
    <SliderContainer {...groupProps}>
      <SliderHeader>
        {props.label && (
          <Text14 as="label" {...labelProps}>
            {props.label}
          </Text14>
        )}
        <Output as="output" {...outputProps}>
          {state.getThumbValueLabel(0)}
        </Output>
      </SliderHeader>
      <Track {...trackProps} ref={trackRef}>
        <TrackBackground />
        <TrackFill style={{ width: `${state.getThumbPercent(0) * 100}%` }} />
        <Thumb index={0} state={state} trackRef={trackRef} />
      </Track>
    </SliderContainer>
  );
}

interface ThumbProps {
  state: SliderState;
  trackRef: React.RefObject<HTMLElement | null>;
  index: number;
}

function Thumb({ state, trackRef, index }: ThumbProps) {
  const inputRef = React.useRef(null);

  const { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state,
  );

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <ThumbContainer
      style={{
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <ThumbInner
        {...thumbProps}
        style={{
          outline: isFocusVisible ? '2px solid var(--black)' : undefined,
          outlineOffset: 2,
          scale: state.isThumbDragging(index) ? '1.15' : undefined,
        }}
      >
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
        </VisuallyHidden>
      </ThumbInner>
    </ThumbContainer>
  );
}
