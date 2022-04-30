import React, {useState} from "react";

const WordContext = React.createContext()

export const WordContextProvider = (props) => {
  const [inputValue, setInputValue] = useState('')
  const [word, setWord] = useState('')
  const ctxValue = {
    inputValue,
    setInputValue,
    word,
    setWord
  }
  return (
    <WordContext.Provider value={ctxValue}>{ props.children }</WordContext.Provider>
  )
}

export default WordContext;