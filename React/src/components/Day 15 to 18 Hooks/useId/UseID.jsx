import React, { useId } from 'react'

function UseID() {
 

    return (
        <div style={{ marginTop: "20px" }}>
        <h3>useId hook</h3> <br />
        
         <Child/>
          
          <p>Second Child</p> <br /><br />
          <Child/>

        </div>
    )
}

export default UseID



function  Child(){

    const id = useId();

    return (

       <div>
        
            <label htmlFor={id+'-name'}>Name:-</label> 
            <input type="text" id={id} />

            <br /><br />
            <label htmlFor={id+'-email'}>password:-</label>
            <input type="password" id={id} />

       </div>

    )
}

// function Form() {
//     const idForFirstName = useId();
//     const idForLastName = useId();
//     const idForEmail = useId();
  
//     return (
//       <>
//         <label htmlFor={idForFirstName}>First Name</label>
//         <input id={idForFirstName} type="text" placeholder={`Generated id --> ${idForFirstName}`} />
  
//         <label htmlFor={idForLastName}>Last Name</label>
//         <input id={idForLastName} type="text" placeholder={`Generated id --> ${idForLastName}`} />
  
//         <label htmlFor={idForEmail}>Email</label>
//         <input id={idForEmail} type="email" placeholder={`Generated id --> ${idForEmail}`} />
//       </>
//     )
//   }