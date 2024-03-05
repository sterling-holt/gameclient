'use client';
import React, { useEffect, useState, useRef } from 'react';

export const Controller = ({ children }: any) => {
  let [isControllerActive, setIsControllerActive] = useState(false);
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const handleGamepadConnected = (event: any) => {
      console.log('Gamepad connected:', event.gamepad);
      setIsControllerActive(true);
    };

    const handleGamepadDisconnected = (event: any) => {
      console.log('Gamepad disconnected:', event.gamepad);
      setIsControllerActive(false);
    };

    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const update = () => {
      const gamepads = navigator.getGamepads();
      if (gamepads[0]) {
        const gp = gamepads[0];

        // Example button press handling
        if (gp.buttons[0].pressed) {
          // Navigate or trigger actions
        }

        // Add more button press handling as needed
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Adjust the ref assignment to handle an array of elements
  return (
    <div>
      <p>Do we have a controller active? {isControllerActive ? 'Yes' : 'No'}</p>
      <div>
        { children }
      </div>
    </div>
  );
};