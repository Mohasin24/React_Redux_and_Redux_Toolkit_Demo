import { createStore } from "redux";
import Actions from "./Actions";

const INITIAL_VAL = {
  counter: 0,
};

const counterReducer = (store = INITIAL_VAL, { type, payload }) => {
 
  switch (type) {
    case Actions.INCREMENT:
      return { counter: store.counter + 1 };
    case Actions.DECREMENT:
      return { counter: store.counter - 1 };
    case Actions.RESET:
      return { counter: 0 };
    case Actions.ADDITION:
      return { counter: store.counter + Number(payload.num) };
    case Actions.SUBSTRACT:
      return { counter: store.counter - Number(payload.num) };
    default:
      break;
  }

  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
