import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const errorRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(''); 
  const [error, setError] = useState(null)
 function Equal(e){
  try{  e.preventDefault();
     setResult((result)=>eval(result))
    }catch(err){
      e.preventDefault();
      setError(err.message);
    }
  }
  function plus(e) { 
    e.preventDefault();
    setResult((result)=>result+"+");
  }; 
  function minus(e) { 
    e.preventDefault();
    setResult((result)=>result+"-");
  }; 
  function divide(e) { 
    e.preventDefault();
    setResult((result)=>result+"/");

  };
  function times(e) { 
    e.preventDefault();
    setResult((result)=>result+"*");
  };  
 
  function resetInput(e) { 
    e.preventDefault();
    setResult((result)=>result.toString().slice(0,-1));
  }; 
 
  function resetResult(e) { 
     e.preventDefault();
    setResult((result)=>0);}; 

    function Result7(e) { 
      e.preventDefault();
     setResult((result)=>result+"7");};

     function Result8(e) { 
      e.preventDefault();
     setResult((result)=>result+"8");}; 
     function Result9(e) { 
      e.preventDefault();
     setResult((result)=>result+"9");}; 
     function Result6(e) { 
      e.preventDefault();
     setResult((result)=>result+"6");}; 
     function Result5(e) { 
      e.preventDefault();
     setResult((result)=>result+"5");}; 
     function Result4(e) { 
      e.preventDefault();
     setResult((result)=>result+"4");}; 
     function Result3(e) { 
      e.preventDefault();
     setResult((result)=>result+"3");}; 
     function Result2(e) { 
      e.preventDefault();
     setResult((result)=>result+"2");}; 
     function Result1(e) { 
      e.preventDefault();
     setResult((result)=>result+"1");}; 
     function Result0(e) { 
      e.preventDefault();
     setResult((result)=>result+"0");}; 
     function Result00(e) { 
      e.preventDefault();
     setResult((result)=>result+"00");};
     function resultP(e) { 
      e.preventDefault();
      setResult((result)=>result+".");
    }; 


   
 
  return ( 
    <div className="App"> 
    <div className="container" >
              <div className="calculator">
              <form>
                 <div ref={errorRef} className="display">
                    <p ref={resultRef}> {error?error:parseFloat(result).toFixed(8)}</p>
                    
                </div>
                <div >
                    <button   onClick={resetResult} className="ac">AC</button>
                    <button  onClick={resetInput} className="del">Del</button>
                    <button  onClick={resultP}className="symbols">.</button>
                    <button onClick={divide} className="symbols">/</button>
        
                </div>
               
                <div >
                    <button onClick={Result7} className="NumpadBtns">7</button> 
                    <button onClick={Result8} className="NumpadBtns">8</button>
                    <button onClick={Result9} className="NumpadBtns">9</button>
                    <button onClick={times} className="symbols">*</button>
        
                </div>
                <div >
                    <button  onClick={Result4} className="NumpadBtns">4</button>
                    <button  onClick={Result5}className="NumpadBtns">5</button>
                    <button   onClick={Result6}className="NumpadBtns">6</button>
                    <button   onClick={minus} className="symbols">-</button>
        
                </div>
                <div >
                    <button  onClick={Result1}className="NumpadBtns">1</button>
                    <button   onClick={Result2}className="NumpadBtns">2</button>
                    <button   onClick={Result3} className="NumpadBtns">3</button>
                    <button  onClick={plus} className="symbols">+</button>
        
                </div>
                <div >
                    <button    onClick={Result00} className="special">00</button>
                    <button   onClick={Result0} className="special">0</button>
                    <button   onClick={Equal} className="equal">=</button>
        
                </div>
                </form>       
                </div>
                </div> 
    </div> 
  ); 
} 
 
export default App; 
