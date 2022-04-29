import React, {useState} from "react";

const WordContext = React.createContext()

export const WordContextProvider = (props) => {
  const [inputValue, setInputValue] = useState('')
  const ctxValue = {
    inputValue,
    setInputValue
  }
  return (
    <WordContext.Provider value={ctxValue}>{ props.children }</WordContext.Provider>
  )
}

export default WordContext;