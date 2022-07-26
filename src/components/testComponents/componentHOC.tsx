import { useState } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
export const withTextColor = (WrapperComponent: any) => (color: string) =>
  function (props: any) {
    const textStyle = {
      color,
    };
    return (
      <div style={textStyle}>
        <WrapperComponent {...props} />
      </div>
    );
  };

export const withOpacityHover =
  (WrapperComponent: any) =>
  (opacity = 0.7) =>
    function (props: any) {
      const [isHovering, setIsHovering] = useState(false);

      const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
      };

      return (
        <div
          style={{
            opacity: isHovering ? opacity : 1,
            cursor: 'default',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <WrapperComponent {...props} />
        </div>
      );
    };

export const Text2 = ({ children }: { children: string }) => <p>{children}</p>;
