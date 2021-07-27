import { ADD_PERSONS, NEW_PERSON } from "./types";

const initStore = {
  persons: [],
};

const reducer = (store = initStore, action) => {
  switch (action.type) {
    case ADD_PERSONS:
      return {
        ...store,
        persons: action.payload,
      };
    case NEW_PERSON:
      return {
        ...store,
        persons: [...store.persons, action.payload],
      };

    default:
      return store;
  }
};

export default reducer;
