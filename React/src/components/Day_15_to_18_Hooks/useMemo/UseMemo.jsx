import { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0);
  
    // Expensive Calculation function
    const calculateValue = (value) => {
      console.log('Computing expensive value...');
    
      let result = 0;
      for (let i = 0; i <= value; i++) {
        result += i;
      }
      return result;
    };
  
   
    const memoizedValue = useMemo(() => calculateValue(count), [count]);
  
    return (
      <div>
        <h3>useMemo hook</h3>
        <p>Count: {count}</p>

        <button onClick={() => setCount(count+1)}>Increment Count</button>
        <p>Expensive Value: {memoizedValue}</p>
      </div>
    );
  };
  
  export default UseMemo;




  

// Scope
// Performance: 
// Security: 
// Simplicity vs. Complexity