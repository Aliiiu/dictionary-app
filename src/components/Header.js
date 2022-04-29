import React, {useRef, useState} from 'react'

const Header = () => {
  const [word, setWord] = useState('')
  const inputRef = useRef()

  const searchHandler = (event) => {
    event.preventDefault();
    const enteredWord = inputRef.current.value;
    setWord(enteredWord)
  }

  return (
    <div className="bg-gray-500 w-[50rem] mx-auto mt-[2rem] py-8 text-center rounded-xl">
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

      <h3 className="text-gray-50 text-center mt-4">Result for: <span className="text-white font-bold">{word}</span> </h3>
    </div>
  )
}

export default Header