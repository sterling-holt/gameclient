'use client'

import React, { useEffect, useState, useRef, createContext } from 'react';

export const Context = createContext({
    isActive: false,
})






export const Provider = ({ children }: any) => {
    let [isActive, setIsControllerActive] = useState(false);
    const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

    return <Context.Provider value={{ 
        isActive 
    }}>
        { children }
    </Context.Provider>
}















/*
'use client';

export const Controller = ({ children }: any) => {
    
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
return <>
<div>
{ children }
</div>
</>
};
*/