import { createStore } from "redux";

const initialState = {
  value: 0,
};

function counterReducer(prevState = initialState, action) {
  switch (action.type) {
    case "increment": {
      return { ...prevState, value: prevState.value + 1 };
    }
    case "decrement": {
      return {
        ...prevState,
        value: prevState.value > 0 ? prevState.value - 1 : 0,
      };
    }
    default: {
      return prevState;
    }
  }
}

export const Store = createStore(counterReducer);
