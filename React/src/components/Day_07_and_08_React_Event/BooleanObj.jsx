import React, { useState } from 'react'
 
function BooleanObj() {

    const [obj,setObj]=useState({
        male:false,
        female:false
    })
 
    const handlerSubmit=(e)=>{
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.checked);
        // console.log(e.target.value);
 
        const {name,checked}=e.target;
        // console.log(name,checked);
        setObj({...obj,[name]:checked})
    }
 
    console.log(obj);
  return (
    <div>
        <h3>Boolean object task</h3><br />
        <form action="">
            <label htmlFor="male">Male</label>
            <input type="checkbox" id="male" name='male' onChange={handlerSubmit}/>  <br /><br />
 
            <label htmlFor="female">Female</label>
            <input type="checkbox" id="female" name="female" onChange={handlerSubmit}/>  <br /><br />
        </form>
     
    </div>
  )
}
 
export default BooleanObj