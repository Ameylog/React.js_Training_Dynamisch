import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarMain from './components/navbarMain/NavbarMain.jsx';
import { lazy, Suspense } from 'react';
import HomePage from './components/navbarMain/HomePage.jsx';
import Spinner from 'react-bootstrap/Spinner';

import {
  day1, day2, day3, day4, day5, day6, day7and8, day9, day10,
  day12to14, day15to18, day19, day24, day25, day26to27, day29,
} from './components/data/nestedLinkObj';

const LazyDay = lazy(() => import("./components/nestedLinkComponent/DayComponent.jsx"));

const LazyComponetsMounting = lazy(() => import('./components/Day 1 class_function_Lifecycle/component_Lifecycle/ComponetsMounting'));
const LazyTask1 = lazy(() => import('./components/Day 1 class_function_Lifecycle/class_component/Task1'));
const LazyTask2 = lazy(() => import('./components/Day 1 class_function_Lifecycle/component_Lifecycle/Task2'));
const LazyTask3 = lazy(() => import('./components/Day 1 class_function_Lifecycle/function_bind/Task3.jsx'));

const LazyTaskProps = lazy(() => import('./components/Day 2 Props_propsTypes/Props/TaskProps'));
const LazyTaskCounters = lazy(() => import('./components/Day 2 Props_propsTypes/counter props with propTypes/TaskCounters'));

const LazyUseState = lazy(() => import('./components/Day 3 Callback_Import_Export_PropsChild_state_useState/state vs useState/useState/UseState'));
const LazyClassState = lazy(() => import('./components/Day 3 Callback_Import_Export_PropsChild_state_useState/state vs useState/class state/ClassState'));
const LazyCallbackParent = lazy(() => import('./components/Day 3 Callback_Import_Export_PropsChild_state_useState/callback/CallbackParent'));
const LazyPropsChildren = lazy(() => import('./components/Day 3 Callback_Import_Export_PropsChild_state_useState/props children/PropsChildren'));
const LazyImportComponent = lazy(() => import('./components/Day 3 Callback_Import_Export_PropsChild_state_useState/import_and_export/ImportComponent'));

const LazyAddElementArray = lazy(() => import('./components/Day 4 Arrays_propsDriling_imgValidation_Counter/AddElementArray'));
const LazyCounter = lazy(() => import('./components/Day 4 Arrays_propsDriling_imgValidation_Counter/Counter'));
const LazyImageValidation = lazy(() => import('./components/Day 4 Arrays_propsDriling_imgValidation_Counter/ImageValidation'));
const LazyPropsDriling = lazy(() => import('./components/Day 4 Arrays_propsDriling_imgValidation_Counter/PropsDriling'));
const LazyArrays = lazy(() => import('./components/Day 4 Arrays_propsDriling_imgValidation_Counter/Arrays'));
const LazyConsole = lazy(() => import("./components/Day 4 Arrays_propsDriling_imgValidation_Counter/Console.jsx"));

const LazyCounterUseEffects = lazy(() => import('./components/Day 5 useSffect/CounterUseEffects'));
const LazyUseEffect = lazy(() => import('./components/Day 5 useSffect/UseEffect'));
const LazyApi = lazy(() => import('./components/Day 5 useSffect/Api'));

const LazySetTimeout = lazy(() => import('./components/Day 6 useEffect practise/SetTimeout'));
const LazySetInterval = lazy(() => import('./components/Day 6 useEffect practise/SetInterval'));
const LazyLocalStorage = lazy(() => import('./components/Day 6 useEffect practise/LocalStorage'));

const LazyEvents = lazy(() => import('./components/Day 7 and Day 8 React Event/Events'));
const LazyOnInputEvent = lazy(() => import('./components/Day 7 and Day 8 React Event/OnInputEvent'));
const LazyFormData = lazy(() => import('./components/Day 7 and Day 8 React Event/FormData'));
const LazyClipBoard = lazy(() => import('./components/Day 7 and Day 8 React Event/ClipBoard'));
const LazyResize = lazy(() => import('./components/Day 7 and Day 8 React Event/window/Resize'));
const LazyWindow = lazy(() => import('./components/Day 7 and Day 8 React Event/window/Window'));
const LazyDragAndDrop = lazy(() => import('./components/Day 7 and Day 8 React Event/DragAndDrop'));
const LazyBoolean=lazy(()=>import("./components/Day 7 and Day 8 React Event/BooleanObj"))

const LazyFor = lazy(() => import('./components/Day 9 map_renderList/for/For'));
const LazyWhile = lazy(() => import('./components/Day 9 map_renderList/do/While'));
const LazyMapDemo = lazy(() => import('./components/Day 9 map_renderList/MapDemo'));
const LazyFill = lazy(() => import("./components/Day 9 map_renderList/Fill"));

const LazyDublicateValue = lazy(() => import('./components/Day 10 card_nestedObject_ArrayDublicate/DublicateValue'));
const LazyObjects = lazy(() => import('./components/Day 10 card_nestedObject_ArrayDublicate/Objects'));
const LazyCardDatas = lazy(() => import('./components/Day 10 card_nestedObject_ArrayDublicate/cardProject/CardDatas'));

const LazyTodo = lazy(() => import('./components/Day 11 todo_list/Todo'));

const LazyTernaryOpetor = lazy(() => import('./components/Day 12 and 13 form_handling_ternary_&&/TernaryOperator'));
const LazyForm = lazy(() => import('./components/Day 12 and 13 form_handling_ternary_&&/Form'));
const LazyTodoNameFilter = lazy(() => import('./components/Day 12 and 13 form_handling_ternary_&&/TodoNameFilter'));
const LazyImagePreview = lazy(() => import('./components/Day 12 and 13 form_handling_ternary_&&/ImagePreview'));

const LazyUseRef = lazy(() => import('./components/Day 15 to 18 Hooks/useRef/UseRef'));
const LazyUseCallback = lazy(() => import('./components/Day 15 to 18 Hooks/useCallback/UseCallback'));
const LazyUseMemo = lazy(() => import('./components/Day 15 to 18 Hooks/useMemo/UseMemo'));
const LazyUseID = lazy(() => import('./components/Day 15 to 18 Hooks/useId/UseID'));
const LazyContextParent = lazy(() => import('./components/Day 15 to 18 Hooks/contextAPI/ContextParent'));
const LazyCameraToggle = lazy(() => import('./components/Day 15 to 18 Hooks/task/CameraToggle'));

const LazyParentChild = lazy(() => import('./components/Day 19 API_Axios/ParentChild'));
const LazyDemoAPI = lazy(() => import('./components/Day 19 API_Axios/axios/DemoAPI'));

const LazyFormikForm = lazy(() => import("./components/Day 24 formik_Yup_form/FormikForm.jsx"));
const LazyEnvironmentFile = lazy(() => import("./components/Day 24 formik_Yup_form/EnvironmentFile.jsx"));

const LazyErrorHandling = lazy(() => import("./components/Day 25 formOptimise/errrorBoundry/ErrorHandling.jsx"));
const LazyFormFormikOptimize = lazy(() => import("./components/Day 25 formOptimise/formOptimization/FormFormikYup.jsx"));
const LazyReduxMain = lazy(() => import("./components/Day 26 to 27 Redux/ReduxMain.jsx"));

const LazyMuiForm = lazy(() => import("./components/Day 28 UI_Library/MuiForm.jsx"));

const LazyImageLazyLoading = lazy(() => import("./components/Day 29 Hoc_Lazy_loading_Custome_hook/ImageLazyLoading.jsx"));
const LazyCustomeHook = lazy(() => import("./components/Day 29 Hoc_Lazy_loading_Custome_hook/customeHook/useApiDemo.jsx"));
const LazyHocDemo = lazy(() => import("./components/Day 29 Hoc_Lazy_loading_Custome_hook/hoc/HOCDemo.jsx"));

const LazyAuth0 = lazy(() => import("./components/Day 30 Auth0_material_Dashboard/Auth0Login.jsx"))


function App() {

  const arr = [24, 35, 1, 53, 5]

  const obj = {
    num: 1512262,
    flag: "hii"
  }

  const fun = () => {
    console.log("This is function");
  }

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1)
    console.log("Hello");
  }


  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMain />

        <Suspense fallback={<div> <Spinner animation="border" /></div>}>
          <Routes>
            <Route element={<HomePage />} index />

            {/* Day1 */}
            <Route path="component" element={<LazyDay linkObj={day1} />} >
              <Route path='componetsMounting' element={<LazyComponetsMounting />} />
              <Route path='task1' element={<LazyTask1 fruit="Mango" />} />
              <Route path='task2' element={<LazyTask2 />} />
              <Route path='task3' element={<LazyTask3 />} />
            </Route>

            {/* Day2 */}
            <Route path="props" element={<LazyDay linkObj={day2} />}>
              <Route path='taskProps' element={<LazyTaskProps name="Amey" age={23} city="Nagpur" job="Software Engineer" array={arr} obj={obj} myfun={fun} />} />
              <Route path='taskCounters' element={<LazyTaskCounters increment={increment} counter={counter} />} />
            </Route>

            {/* Day3 */}
            <Route path="state" element={<LazyDay linkObj={day3} />} >
              <Route path="useState" element={<LazyUseState />} />
              <Route path="classState" element={<LazyClassState />} />
              <Route path="callbackParent" element={<LazyCallbackParent />} />
              <Route path="propsChildren" element={<LazyPropsChildren />} />
              <Route path="importComponent" element={<LazyImportComponent />} />
            </Route>

            {/* Day 4 */}
            <Route path="arrPropsDril" element={<LazyDay linkObj={day4} />}>
              <Route path="addElementArray" element={<LazyAddElementArray />} />
              <Route path="counter" element={<LazyCounter />} />
              <Route path="imageValidation" element={<LazyImageValidation />} />
              <Route path="propsDriling" element={<LazyPropsDriling />} />
              <Route path="arrays" element={<LazyArrays />} />
              <Route path="consoleMethods" element={<LazyConsole />} />
            </Route>

            {/* Day5 */}
            <Route path="useEffect" element={<LazyDay linkObj={day5} />}>
              <Route path="counterUseEffect" element={<LazyCounterUseEffects />} />
              <Route path="useEffect" element={<LazyUseEffect />} />
              <Route path="api" element={<LazyApi />} />
            </Route>

            {/* Day6 */}
            <Route path="timeStorageApi" element={<LazyDay linkObj={day6} />}>
              <Route path="setTimeout" element={<LazySetTimeout />} />
              <Route path="setInterval" element={<LazySetInterval />} />
              <Route path="localStorage" element={<LazyLocalStorage />} />
            </Route>

            {/* Day7 and 8 */}
            <Route path="event" element={<LazyDay linkObj={day7and8} />}>
              <Route path='events' element={<LazyEvents />} />
              <Route path='onInputEvent' element={<LazyOnInputEvent />} />
              <Route path='booleanObj' element={<LazyBoolean />} />
              <Route path='formData' element={<LazyFormData />} />
              <Route path='clipBoard' element={<LazyClipBoard />} />
              <Route path='resize' element={<LazyResize />} />
              <Route path='window' element={<LazyWindow />} />
              <Route path='dragAndDrop' element={<LazyDragAndDrop />} />
            </Route>

            {/*Day 9 */}
            <Route path="renderList" element={<LazyDay linkObj={day9} />}>
              <Route path='forLoop' element={<LazyFor />} />
              <Route path='whileLoop' element={<LazyWhile />} />
              <Route path='mapDemo' element={<LazyMapDemo />} />
              <Route path='fill' element={<LazyFill />} />
            </Route>

            {/* Day 10 */}
            <Route path="cardData" element={<LazyDay linkObj={day10} />}>
              <Route path='dublicateValue' element={<LazyDublicateValue />} />
              <Route path='objects' element={<LazyObjects />} />
              <Route path='cardDatas' element={<LazyCardDatas />} />
            </Route>

            {/* Day 11 */}
            <Route path="todoApp" element={<LazyTodo />} />

            {/* Day 12 to 14  */}
            <Route path="formHandling" element={<LazyDay linkObj={day12to14} />}>
              <Route path='TernaryOpetor' element={<LazyTernaryOpetor />} />
              <Route path='form' element={<LazyForm />} />
              <Route path='todoNameFilter' element={<LazyTodoNameFilter />} />
              <Route path='imagePreview' element={<LazyImagePreview />} />
            </Route>

            {/* Day 15 to 18 */}
            <Route path="hooks" element={<LazyDay linkObj={day15to18} />}>
              <Route path='useRef' element={<LazyUseRef />} />
              <Route path='useCallback' element={<LazyUseCallback />} />
              <Route path='useMemo' element={<LazyUseMemo />} />
              <Route path='useID' element={<LazyUseID />} />
              <Route path='contextParent' element={<LazyContextParent />} />
              <Route path='cameraToggle' element={<LazyCameraToggle />} />
            </Route>

            {/* Day 19 */}
            <Route path="axios" element={<LazyDay linkObj={day19} />}>
              <Route path='parentChild' element={<LazyParentChild />} />
              <Route path='demoAPI' element={<LazyDemoAPI />} />
            </Route>

            {/* Day 20 */}
            {/* AllRoues file */}
            {/* <Route path="allroutes" element={<AllRoutes/>}  /> */}

            {/* Day 24 */}
            <Route path="formikeFormEnv" element={<LazyDay linkObj={day24} />}>
              <Route path='envFileAccess' element={<LazyEnvironmentFile />} />
              <Route path='formikeForm' element={<LazyFormikForm />} />
            </Route>

            {/* Day 25 */}
            <Route path='formOptimization' element={<LazyDay linkObj={day25} />}>
              <Route path="errorBoundry" element={<LazyErrorHandling />} />
              <Route path="formOptimize" element={<LazyFormFormikOptimize />} />
            </Route>

            {/* Day 26 and 27*/}
            <Route path='Redux' element={<LazyDay linkObj={day26to27} />}>
              <Route path='reduxdemo' element={<LazyReduxMain />} index />
            </Route>

            {/* Day 28 */}
            <Route path='mui' element={<LazyMuiForm />} />

            {/* Day 29 */}
            <Route path='lazy-hoc-custHook' element={<LazyDay linkObj={day29} />}>
              <Route index element={<LazyImageLazyLoading />} />
              <Route path='images' element={<LazyImageLazyLoading />} />
              <Route path='hoc' element={<LazyHocDemo />} />
              <Route path='customeHook' element={<LazyCustomeHook />} />
            </Route>

            {/* Day 30 */}
            <Route path="auth0" element={<LazyAuth0 />} />

          </Routes>

        </Suspense>
      </BrowserRouter>

      {/* <MainRoutes/> */}
    </div>
  );
}

export default App;



