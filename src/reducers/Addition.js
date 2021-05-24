import { FIRST_NUM, SECOND_NUM } from "../action/Type";

const initialstate = {
  first: 0,
  second: 0,
  total: 0,
};

const AddTwoNum = (state = initialstate, action) => {
  console.log(action)
  switch (action.type) {
    case FIRST_NUM:
     const a = action.payload;
     return{
         ...state,
         first:a
     }
      console.log(FIRST_NUM)
      
    case SECOND_NUM:
     const b = action.payload;
     return{
       ...state,
       second:b
     }
      console.log(state.second)
      
       
    default:
      return state;
  }
};
export default AddTwoNum;
