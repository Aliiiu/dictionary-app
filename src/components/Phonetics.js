import React, {useContext, useState} from 'react';
import WordContext from '../store/word-context';

const Phonetics = (props) => {
  const ctx = useContext(WordContext)
  const audio = new Audio(props.wordData[0].phonetics[0].audio)

  const audioHandler = () => {
    audio.play()
  }
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          {/* <p>{ctx.inputValue}</p> */}
          <p className='text-xl font-semibold mr-7'>{props.wordData[0].word}</p>
          <span>
            --- {(props.wordData[0].phonetic) || (props.wordData[0].phonetics[1].text)}
          </span>
        </div>
        <i className='fas fa-volume-up' onClick={audioHandler}></i>
      </div>
  )
}

export default Phonetics;

// {
//           props.wordData.map(element => 
//           (
//             <div>
//               <h2>{element.word}</h2>
//               <span>
//                 {element.phonetics.find(item => item.text).text}
//               </span>
//             </div>
//             )
//             )
//           }