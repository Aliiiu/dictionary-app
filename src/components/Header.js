import React, {useContext, useRef, useState} from 'react'
import WordContext from '../store/word-context'

const Header = () => {
  const [word, setWord] = useState('')

  const ctx = useContext(WordContext)
  
  const inputRef = useRef()

  const searchHandler = (event) => {
    event.preventDefault();
    const enteredWord = inputRef.current.value;
    setWord(enteredWord)
    ctx.setInputValue(enteredWord)
    inputRef.current.value = ''
  }

  return (
    <div className="bg-gray-500 py-8 text-center container">
      <h1 className="text-white text-[30px] font-bold">Dictionary App</h1>
      <p className="mt-1 mb-10 text-slate-300 text-[18px]">Know the meaning of your desired word</p>

      <div className="flex items-center justify-center mt-5">
        <form className="flex border-2 border-gray-200 rounded" onSubmit={searchHandler}>
          <input 
            type="text" 
            placeholder="Enter a word" 
            className="px-4 py-2 md:w-[35rem] max-w-11/12" 
            ref={inputRef}
          />
          <button className="bg-blue-500 border-l px-4 py-2 text-white">Search</button>
        </form>
      </div>

      {ctx.inputValue && <h3 className="text-gray-50 text-center mt-4">Result for: <span className="text-white font-bold">{ctx.inputValue}</span> </h3>}
    </div>
  )
}

export default Header