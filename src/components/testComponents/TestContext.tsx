/* eslint-disable */
import React from 'react';

interface AppContextInterface {
  counter: number;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);

export const ToDoProvider = (props: any) => (
  <AppContext.Provider
    value={{
      counter: 0,
    }}
  >
    {props.children}
  </AppContext.Provider>
);
