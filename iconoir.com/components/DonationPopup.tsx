import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { LargeButton } from '../components/Button';
import { media } from '../lib/responsive';
import { Sparks } from 'iconoir-react';

export function DonationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      const isReturningUser = localStorage.getItem('returningUser');
      const isReturningUserAge = localStorage.getItem('returningUserAge');
      console.log('isReturningUser:', isReturningUser); // Debugging line
      console.log('isReturningUserAge:', isReturningUserAge); // Debugging line

      if (isReturningUser === 'true' && isReturningUserAge === 'false') {
        setTimeout(() => setIsVisible(true), 15000);
        localStorage.setItem('returningUserAge', 'true');
      } else {
        localStorage.setItem('returningUser', 'true');
        localStorage.setItem('returningUserAge', 'false');
        console.log('Set returningUser to true'); // Debugging line
      }
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <PopupContent>
          <Sparks></Sparks>
          <Text>
            Your one-time or recurring contribution does a lot to keep Iconoir
            going.
          </Text>
          <a
            href={
              'https://opencollective.com/iconoir/donate?interval=month&amount=10'
            }
            target={'_blank'}
          >
            Support the project!
          </a>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </PopupContent>
      )}
    </>
  );
}

const Text = styled.span`
  color: #ffffffba;
`;

const PopupContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  display: none;
  ${media.lg} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 0;
    background: #8330c6;
    color: var(--white);
    font-weight: 500;
    font-size: 15px;
    position: fixed;
    top: 16px;
    left: 16px;
    right: 16px;
    border-radius: 8px;
    z-index: 9999;
    margin: auto;
  }
  > * {
    margin: 0 4px;
  }
  > a {
    color: var(--white);
    opacity: 1;
    text-decoration: underline;
  }
`;

const CloseButton = styled.span`
  color: var(--white);
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const LargeButtonModal = styled(LargeButton)`
  margin-top: 30px;
`;
