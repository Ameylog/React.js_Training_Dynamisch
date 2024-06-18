import React, { useEffect, useState } from 'react'

function Window() {

  const [state, setState] = useState("")
  const [state2, setState2] = useState("This is unload")

  const [focus, setFocus] = useState(document.hasFocus())
  const [title,setTitle]=useState(document.title)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setState("Windows Events on Load")
      }, 1000)
    };

    const onFocus = () =>{
      setTitle(document.title="React App")
      setFocus(true);
    } 
      
    const onBlur = () =>{
      setTitle(document.title="Comming Back...")
      setFocus(false)
    } 
      

    const handleBeforeUnload = (e) => {
      e.preventDefault()
      e.returnValue = ''
      const message = window.confirm('Are you sure you want to leave?');
      e.returnValue = message;
      return message;
    };

    const handleUnLoad = () => {
      setTimeout(() => {
        setState2("")
      }, 2000)
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnLoad);
    }
  }, []);

  // console.log(focus);
  // console.log(title);
  return (
    <div>
      <h3>Window Events </h3><br />
      <p>{state}</p>

      <p>{state2} </p>

      <p>BeforeUnload</p>
      <a href="https://www.w3schools.com/">w3</a>

      <h2>Focus Tab</h2>
      <p>Focus: {focus.toString()}</p>

      <p>Title:-{title}</p>

    </div>
  )
}

export default Window
