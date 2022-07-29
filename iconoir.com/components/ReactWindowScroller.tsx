// From: https://github.com/FedericoDiRosa/react-window-scroller/blob/master/src/index.jsx
// Modified to remove scrollTo callback to support momentum scroll on iOS. We don't need it
// in this implementation anyway.

import { throttle } from 'lodash';
import React, { useRef, useEffect, useCallback } from 'react';
import { GridProps, ListProps } from 'react-window';

function isHtmlElement(
  element: HTMLElement | typeof window
): element is HTMLElement {
  return (element as HTMLElement).scrollTop !== undefined;
}

interface PositionKey {
  x: string;
  y: string;
}
const windowScrollPositionKey: PositionKey = {
  y: 'pageYOffset',
  x: 'pageXOffset',
};

const documentScrollPositionKey: PositionKey = {
  y: 'scrollTop',
  x: 'scrollLeft',
};

const getScrollPosition = (
  axis: keyof PositionKey,
  element?: HTMLElement | null
): number =>
  // @ts-ignore indexing as string
  element?.[documentScrollPositionKey[axis] as any] ||
  // @ts-ignore indexing as string
  window[windowScrollPositionKey[axis] as any] ||
  // @ts-ignore indexing as string
  document.documentElement[documentScrollPositionKey[axis] as any] ||
  // @ts-ignore indexing as string
  document.body[documentScrollPositionKey[axis] as any] ||
  0;

interface ChildOpts<Props extends ListProps | GridProps> {
  ref: React.MutableRefObject<any>;
  outerRef: React.MutableRefObject<any>;
  style: object;
  onScroll: Props['onScroll'];
}
interface ReactWindowScrollerProps<Props extends ListProps | GridProps> {
  children: (opts: ChildOpts<Props>) => React.ReactElement;
  throttleTime?: number;
  isGrid?: boolean;
}
export function ReactWindowScroller<
  Props extends ListProps | GridProps = ListProps
>({
  children,
  throttleTime = 10,
  isGrid = false,
}: ReactWindowScrollerProps<Props>) {
  const ref = useRef<any>();
  const outerRef = useRef<HTMLElement>();
  const targetElement =
    typeof window === 'undefined' ? (undefined as any) : window;

  useEffect(() => {
    const handleWindowScroll = throttle(() => {
      const rect = outerRef.current?.parentElement?.getBoundingClientRect();
      const offsetTop =
        (rect?.top || 0) +
        (isHtmlElement(targetElement)
          ? targetElement.scrollTop
          : targetElement.scrollY);
      const offsetLeft =
        (rect?.left || 0) +
        (isHtmlElement(targetElement)
          ? targetElement.scrollLeft
          : targetElement.scrollX);
      const scrollTop = getScrollPosition('y') - offsetTop;
      const scrollLeft = getScrollPosition('x') - offsetLeft;
      if (isGrid)
        ref.current && ref.current!.scrollTo({ scrollLeft, scrollTop });
      if (!isGrid) ref.current && ref.current!.scrollTo(scrollTop);
    }, throttleTime);

    targetElement.addEventListener('scroll', handleWindowScroll);
    return () => {
      handleWindowScroll.cancel();
      targetElement.removeEventListener('scroll', handleWindowScroll);
    };
  }, [isGrid, targetElement]);

  const onScroll = useCallback(() => {
    // We are purposefully doing nothing here in order to support momentum scroll on iOS.
  }, [isGrid, targetElement]);

  React.useEffect(() => {
    // We have to get rid of the scroll handlers here, because they will cause the list
    // to go blank whenever adjusting the number of items.
    ref.current._onScrollVertical = () => {};
    ref.current._onScrollHorizontal = () => {};
  }, [outerRef]);

  return children({
    ref,
    outerRef,
    style: {
      width: isGrid ? 'auto' : '100%',
      height: '100%',
      display: 'inline-block',
      overflow: 'hidden',
      zIndex: 3,
    },
    onScroll,
  });
}
