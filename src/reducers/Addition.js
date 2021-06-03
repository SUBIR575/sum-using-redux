import { FIRST_NUM, SECOND_NUM } from "../action/Type";

const initialstate = {
  first: 0,
  second: 0,
  total: 0,
};

const AddTwoNum = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case FIRST_NUM:
      state.first = Number(action.payload) || 0;
      console.log(FIRST_NUM);
      state.total = state.first + state.second;
      return {
        ...state,
      };

    case SECOND_NUM:
      state.second = Number(action.payload) || 0;
      state.total = state.first + state.second;
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default AddTwoNum;
