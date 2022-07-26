import { useState } from 'react';

export const MouseTrackerGetterRender = ({ children }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: any) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <p>
        x: {position.x}, y: {position.y}
      </p>
      {children(position)}
    </div>
  );
};
