import React from 'react'
import { lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Suspense } from 'react';
import HOC from './components/Day 29 Hoc_Lazy_loading_Custome_hook/hoc/HOC';
import { HocDemo } from "./components/Day 29 Hoc_Lazy_loading_Custome_hook/hoc/HOC";

const ApiData = lazy(() => import('./components/Day 29 Hoc_Lazy_loading_Custome_hook/customeHook/useApiDemo'));

// Lazy Loading component
const LazyImage = lazy(() => import('./components/Day 29 Hoc_Lazy_loading_Custome_hook/LazyImage'));
const MUIForm = lazy(() => import('./components/Day 28 UI_Library/MuiForm'));
const ImageLazyComp = lazy(() => import("./components/Day 29 Hoc_Lazy_loading_Custome_hook/ImageLazyLoading"));

function App2() {

    // Hoc example
    const EnhancedComponent = HOC(HocDemo);

    return (
        <div>
            <h3>Hello</h3>

            <Suspense fallback={<p>Loading...</p>}>
                <MUIForm />
                <ImageLazyComp />

                <br />

                <EnhancedComponent name="pune" />

                <ApiData />
            </Suspense>

            <br />
        </div>
    )
}
export default App2;


