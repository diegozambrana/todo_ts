/* eslint-disable */
import React, {
  cloneElement,
  createContext,
  FC,
  useContext,
  useState,
} from 'react';
import './Card.css';

const LIMIT = 3;

const CardContext = createContext<any>(undefined);

const Card: any = ({ children }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const expand = () => {
    setIsCollapsed(!isCollapsed);
  };

  const collapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const value = { isCollapsed, expand, collapse };
  return (
    <CardContext.Provider value={value}>
      <div className="card">{children}</div>
    </CardContext.Provider>
  );
};

export const CardContent = ({ children }: any) => {
  const { isCollapsed } = useContext(CardContext);
  return children.map((child: any, index: number) => {
    if (isCollapsed) {
      while (LIMIT > index) {
        return <div key={index}>{child}</div>;
      }
    } else {
      return <div key={index}>{child}</div>;
    }
  });
};

export const Expand = ({ children }: any) => {
  const { expand, isCollapsed } = useContext(CardContext);
  return isCollapsed ? (
    cloneElement(children, { onClick: expand })
  ) : (
    <div></div>
  );
};

export const Collapse = ({ children }: any) => {
  const { collapse, isCollapsed } = useContext(CardContext);
  return !isCollapsed ? (
    cloneElement(children, { onClick: collapse })
  ) : (
    <div></div>
  );
};

Card.CardContent = CardContent;
Card.Expand = Expand;
Card.Collapse = Collapse;

export default Card;
