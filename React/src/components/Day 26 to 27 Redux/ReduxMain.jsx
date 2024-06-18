import React from 'react'
import { Provider } from 'react-redux'
import { store } from "./store";
import ReduceMain from './ReduceMain';
function ReduxMain() {
    return (
        <div>
            <Provider store={store}>
                <ReduceMain />
            </Provider>

        </div>
    )
}

export default ReduxMain
