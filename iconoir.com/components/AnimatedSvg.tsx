import React from 'react';
import anime from 'animejs';

function playWithLines1() {
  anime({
    targets: '.playWithLines2 .roll1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: 'alternate',
    complete: playWithLines2,
  });
}
function playWithLines2() {
  anime({
    targets: '.playWithLines2 .roll2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: 'alternate',
    complete: playWithLines3,
  });
}
function playWithLines3() {
  anime({
    targets: '.playWithLines2 .roll3',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: 'alternate',
    complete: playWithLines4,
  });

  anime({
    targets: '.playWithLines2',
    rotate: '130',
    easing: 'spring(1, 80, 10, 0)',
    duration: 30,
    direction: 'alternate',
    delay: 100,
  });
}
function playWithLines4() {
  anime({
    targets: '.playWithLines2 .roll4',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: 'alternate',
    complete: playWithLines1,
  });
}

export function AnimatedSvg() {
  React.useEffect(() => {
    playWithLines1();
  }, []);
  return (
    <svg
      className="playWithLines2"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="roll1"
        d="M14.1488 9.47163V3.61153C14.1488 2.72151 13.4273 2 12.5373 2V2C11.6473 2 10.9258 2.72151 10.9258 3.61153V8.44611"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="roll1"
        d="M16.346 12.841L18.5217 5.58862C18.7755 4.74265 18.2886 3.85248 17.4394 3.60984V3.60984C16.5943 3.3684 15.7142 3.8609 15.4779 4.70743L14.1484 9.47149"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="roll1"
        d="M7.61935 9.24985L8.67489 11.5913C9.03961 12.4003 8.68159 13.352 7.87404 13.72C7.06183 14.0901 6.10347 13.7296 5.73663 12.9159L4.68109 10.5745C4.31637 9.76542 4.67439 8.81376 5.48193 8.44574C6.29415 8.07559 7.25251 8.43614 7.61935 9.24985Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="roll1"
        d="M11.7192 12.2615V12.2615C11.9239 11.694 11.8998 11.0692 11.6518 10.5192L10.5787 8.13874C10.2181 7.33892 9.27613 6.98454 8.4778 7.34836V7.34836C7.66469 7.71892 7.31885 8.68832 7.71382 9.48986L7.84946 9.76511"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="roll1"
        d="M13.8566 17.6767L14.3487 16.6927C14.3976 16.5947 14.3461 16.4763 14.241 16.4454L10.6903 15.4011C9.97853 15.1918 9.51797 14.5038 9.59563 13.766V13.766C9.68372 12.9292 10.4284 12.3188 11.2662 12.3968L16.0542 12.8422C16.0542 12.8422 19.8632 13.4282 18.5447 17.2372C17.2262 21.0463 16.7867 22.3648 13.8566 22.3648C11.9521 22.3648 9.16855 22.3648 9.16855 22.3648H8.87555C6.52912 22.3648 4.62697 20.4627 4.62697 18.1163V18.1163L4.48047 9.91211"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        className="roll2"
        strokeDasharray="69px"
        style={{
          strokeDashoffset: '69px',
        }}
        d="M7 10.625H14.2C14.2 10.625 14.2 10.625 14.2 10.625C14.2 10.625 17 10.625 17 13.625C17 17 14.2 17 14.2 17H13.4M7 10.625L10.5 14M7 10.625L10.5 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="roll2"
        strokeDasharray="69.1247px"
        style={{
          strokeDashoffset: '69.1247px',
        }}
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="roll3"
        strokeDasharray="36.0466px"
        style={{
          strokeDashoffset: '36.0466px',
        }}
        d="M21.1683 8C19.6252 4.46819 16.1011 2 12.0004 2C6.81508 2 2.55153 5.94668 2.0498 11M21.1683 8H17.0004M21.1683 8H21.4004C21.7318 8 22.0004 7.73137 22.0004 7.4V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="roll3"
        strokeDasharray="36.0466px"
        style={{
          strokeDashoffset: '36.0466px',
        }}
        d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13M2.88146 16H7.04938M2.88146 16H2.64938C2.318 16 2.04938 16.2686 2.04938 16.6V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="roll4"
        strokeDasharray="30.2841px"
        style={{
          strokeDashoffset: '30.2841px',
        }}
        d="M4 13V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="roll4"
        strokeDasharray="21.8995px"
        style={{
          strokeDashoffset: '21.8995px',
        }}
        d="M12 3L12 15M12 15L8.5 11.5M12 15L15.5 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
