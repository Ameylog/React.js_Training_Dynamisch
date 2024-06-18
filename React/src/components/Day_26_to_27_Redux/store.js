import { createStore } from "redux";

//cretae  reducer
const initial = {
    count: 0,
    age: 0
}

const reducer = (state = initial, action) => {
    switch (action.type) {
        case "IncrementCount":
            return { ...state, count: state.count + 1 };

        case "DecrementCount":
            return { ...state, count: state.count - 1 };

        case "IncrementAge":
            return { ...state, age: state.age + 1 };

        case "DecrementAge":
            return { ...state, age: state.age - 1 };

        default: return state;
    }
}


//created store
export const store = createStore(reducer);