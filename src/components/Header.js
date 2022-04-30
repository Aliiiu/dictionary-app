import React, {useContext, useEffect, useState} from 'react'
import WordContext from '../store/word-context'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [sugWord, setSugWord] = useState('')
  const [sugResult, setSugResult] = useState([]);
  const ctx = useContext(WordContext)

  const searchHandler = (event) => {
    event.preventDefault();
    ctx.setInputValue(sugWord)
    setSugWord('')
  }

  const wordChangeHandler = (event) => {
    setSugWord(event.target.value)
  }

  const closeHandler = (event) => {
    event.preventDefault()
    setSugWord('')
  }

  const sugWordHandler = (value) => {
    ctx.setInputValue(value)
    setSugWord('')
  }

  useEffect(() => {
    const fetchSugWord = async () => {
      if (sugWord) {
        const res = await axios.get(`https://api.datamuse.com/sug?s=${sugWord}`)
        setSugResult(res.data)
      }
    }
    fetchSugWord()
  }, [sugWord])

  return (
    <div className="bg-gray-500 py-8 container">
      <h1 className="text-white text-[30px] font-bold text-center">Dictionary App</h1>
      <p className="mt-1 mb-10 text-slate-300 text-[18px] text-center">Know the meaning of your desired word</p>

      <div className="flex items-center justify-center mt-5">
        <form className="flex border-2 border-gray-200 rounded" onSubmit={searchHandler}>
          <input 
            type="text" 
            placeholder="Enter a word" 
            className="px-4 py-2 md:w-[35rem] max-w-11/12 focus:outline-0" 
            value={sugWord}
            onChange={wordChangeHandler}
          />
          <button className="bg-white px-4 py-2 ">{sugWord.length === 0 ? <SearchIcon /> : <CloseIcon onClick={closeHandler} />}</button>
        </form>
        
      </div>
      {(sugResult && sugWord) && (<div className='flex flex-col w-[17rem] mx-auto md:w-[38rem] bg-white'>
        {sugResult.map((item) => {
          return (
            <div>
              <h3  key={uuidv4()} onClick={() => sugWordHandler(item.word)} className='text-center cursor-pointer'>{item.word}</h3>
              <hr />
          </div>)
        })}
      </div>)}
      {(ctx.inputValue || ctx.word) && <h3 className="text-gray-50 text-center mt-4">Result for: <span className="text-white font-bold">{ctx.inputValue ? ctx.inputValue : ctx.word}</span> </h3>}
    </div>
  )
}

export default Header