import React, { ReactNode, useReducer } from 'react';
import { LocationType } from '../utils/types';
import ACTIONS from './actions';
import locations from './data';

const initialState = {
  locations
};

interface InitialState {
  locations: Array<LocationType>;
}

const reducer = (state: InitialState, action: Actions) => {
  const getIndex = () => state.locations.findIndex((item) => item.id == action.payload.id);
  switch (action.type) {
    case ACTIONS.ADD_LOCATION:
      console.log('action.payload---->', action.payload);
      return { locations: [...state.locations, action.payload] };
    case ACTIONS.EDIT_LOCATION: {
      let index = getIndex();
      state.locations[index] = { ...action.payload };
      return state;
    }
    case ACTIONS.DELETE: {
      state.locations = state.locations.filter((location) => location.id !== action.payload.id);
      return state;
    }
    default:
      return state;
  }
};

interface Actions {
  type: string;
  payload: LocationType;
}

const Store = React.createContext({} as ContextInterface);

interface ContextInterface {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

function ContextContainer({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}

interface Props {
  children: ReactNode;
}

export default Store;

export { ContextContainer };
