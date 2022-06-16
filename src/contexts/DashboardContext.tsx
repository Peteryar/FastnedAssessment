import React, { ReactNode, useReducer } from 'react';

const initialState = {
  screen: 'locations'
};

interface InitialState {
  screen: string;
}

const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return { ...state, screen: 'add_location' };
    default:
      return { ...state, screen: 'location' };
  }
};

interface Actions {
  type: 'ADD_LOCATION' | 'LOCATION';
  payload?: object | string | number | Array<object | string | number>;
}

const DashboardContext = React.createContext({} as ContextInterface);

interface ContextInterface {
  state: InitialState;
  dispatch: Function;
}

function ContextContainer({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DashboardContext.Provider value={{ state, dispatch }}>{children}</DashboardContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}

export default DashboardContext;

export { ContextContainer };
