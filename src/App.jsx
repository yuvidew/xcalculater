import React, { useState } from 'react'


const App = () => {
  const [input , setInput] = useState('')
  const [result, setResult] = useState('');
  
  const handleClick = (e) => {
    setInput(input.concat(e.target.name))
  }

  const onClear = () => {
    setInput("")
    setResult("")
  }

  const onCalculate = () => {
    const calculateRes = eval(input);
    if(input === "") {
      setResult("Error");
    }
    else if(isNaN(calculateRes)) {
      setResult("NaN");
    } 
    else if(calculateRes == Infinity) {
      setResult(calculateRes);
    } 
    else if (calculateRes) {
      setResult(calculateRes);
    } 
  }

  const buttonsNum = [
    {
      text : "7",
      name : "7",
      onClick : handleClick
    },
    {
      text : "8",
      name : "8",
      onClick : handleClick
    },{
      text : "9",
      name : "9",
      onClick : handleClick
    },{
      text : "+",
      name : "+",
      onClick : handleClick
    },{
      text : "4",
      name : "4",
      onClick : handleClick
    },{
      text : "5",
      name : "5",
      onClick : handleClick
    },{
      text : "6",
      name : "6",
      onClick : handleClick
    },{
      text : "-",
      name : "-",
      onClick : handleClick
    },{
      text : "1",
      name : "1",
      onClick : handleClick
    },{
      text : "2",
      name : "2",
      onClick : handleClick
    },{
      text : "3",
      name : "3",
      onClick : handleClick
    },{
      text : "*",
      name : "*",
      onClick : handleClick
    },{
      text : "C",
      name : "C",
      onClick : onClear
    },{
      text : "0",
      name : "0",
      onClick : handleClick
    },{
      text : "=",
      name : "=",
      onClick : onCalculate
    },{
      text : "/",
      name : "/",
      onClick : handleClick
    },
  ]


  return (
    <div className='h-[100vh] border flex items-center justify-center flex-col gap-y-3'>
      <h1 className='text-[2rem]'>React Calculator</h1>

      <div className=' w-[20rem]'>
        <input type="text" className=' w-full border-2 text-[1.2rem] p-2 mb-[2rem]' value={input} readOnly />
        <input 
          type='text' 
          className=' w-full text-center outline-none border-none text-[1.2rem] p-2 mb-[2rem]' 
          value={result}
          readOnly  
        />
        <div className=' grid grid-cols-4 gap-3'>
          {buttonsNum.map(ele => (
            <button 
              key={ele.text}
              className=' bg-gray-200 py-3 text-[1.4rem]' 
              onClick={ele.onClick}
              name={ele.name}
            >
              {ele.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App