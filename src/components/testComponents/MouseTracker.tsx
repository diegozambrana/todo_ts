import { useState } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
export const MouseTracker = ({ render }: any) => {
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
      {render(position)}
    </div>
  );
};

export const withMouse = (Component: any) =>
  function (props: any) {
    return (
      <MouseTracker
        render={(position: any) => <Component {...props} position={position} />}
      />
    );
  };

export const Block = ({ position }: any) => (
  <div
    style={{
      backgroundColor: 'red',
      width: '50px',
      height: '50px',
      position: 'absolute',
      left: position.x,
      top: position.y,
    }}
  />
);
