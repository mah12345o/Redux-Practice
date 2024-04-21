import { createStore } from 'redux'

const INCREMENT= "INCREMENT";
const initialState = {
    numOfItems: JSON.parse(localStorage.getItem('cartItems')) || "",
  };
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            const updatedCartItems = action.payload;
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return {
                ...state,
                numOfItems: updatedCartItems,
            };

        default:
            return state;
    }
};
const store =  createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;