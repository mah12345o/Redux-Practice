import { createStore } from 'redux'

const COUNTER_ADD = "INCREMENT";
const initialState = {
    numOfItems: 0,
  };
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_ADD:
            return {
                ...state,
                counteradd: state.numOfItems + 1,
            };

        default:
            return state;
    }
};
const store =  createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;