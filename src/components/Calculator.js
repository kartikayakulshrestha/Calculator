import React,{useState} from 'react'

const Calculator = () => {
    const [result,setresult]=useState("0")
    function calc(x){
      return eval(x)
    }

    const cE=()=>{
      setresult("")
    }
    const yesman = (e)=>{
      let x=e.target.value
      
      if(x[x.length-1]==="="){
        if((result[result.length-1]==="+" || result[result.length-1]==="-" || result[result.length-1]==="*" || result[result.length-1]==="/")){
          setresult("MATH ERROR")
        }else{
        setresult(calc(result))
        }
        console.log(result)
      }
      if( "1234567890+-/(.)%".includes(x[x.length-1])|| result.length === 1){
      
        setresult(e.target.value)
      }
      
    }
    function man(e){
      if(result.length===0){
        setresult("0")
      }
      if(result[result.length-1]==="+"|| result[result.length-1]==="-" || result[result.length-1]==="*" || result[result.length-1]==="/"){
        setresult("MATH ERROR")
      }
    }
  return (
    <>

        <div className='calc mt-5'>
            <input type="text" value={result} onChange={yesman} className='val' ></input>
            <div className='butgrid row'>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"+")}} >+</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"1")}} >1</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"2")}} >2</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"3")}} >3</span>

                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"-")}} >-</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"4")}} >4</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"5")}} >5</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"6")}} >6</span>

                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"*")}} >X</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"7")}} >7</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"8")}} >8</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"9")}} >9</span>

                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"/")}} >/</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+"0")}} >0</span>
                <span className='col-3 bt btn1' onClick={()=>{setresult(result+".")}} >.</span>
                <span className='col-3 bt btn1' onClick={()=>{man("=")}} >=</span>

                <span className='col-3 bt btn1' onClick={cE}>CE</span>
                
            </div>
        </div>
      
    </>
  )
}

export default Calculator
