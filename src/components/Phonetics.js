import React, {useContext, useState} from 'react';
import WordContext from '../store/word-context';

const Phonetics = (props) => {
  let audio = null
  if (props.wordData[0].phonetics.length > 0){
    audio = new Audio(props.wordData[0].phonetics[0].audio)
  }
    

  const audioHandler = () => {
    if (audio) {
      audio.play()
    }
  }
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <p className='text-xl font-semibold mr-7'>{props.wordData[0].word}</p>
          {(props.wordData[0].phonetics.length > 1) ? (<span>
            --- {(props.wordData[0].phonetic) || (props.wordData[0].phonetics[1].text)}
          </span>) : (props.wordData[0].phonetics.length > 0) ? (<span>
            --- {(props.wordData[0].phonetic)}
          </span>) : null}
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