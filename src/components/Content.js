import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import WordContext from '../store/word-context';
import Meanings from './Meanings';
import Example from './Example';
import Synonym from './Synonym';
import Phonetics from './Phonetics';

const Content = () => {
  const ctx = useContext(WordContext)
  const [randWord, setRandWord] = useState('')
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // const getWord = async () => {
  //   const res = await axios('https://random-words-api.vercel.app/word');
  //   ctx.setWord(res.data[0].word)
  //   return res.data[0].word;
  // }


  useEffect(() => {
    
    const fetchApi = async (params) => {
      try {
        setLoading(true)
        if (params === '') {
          const sug = await axios.get('https://random-words-api.vercel.app/word')
          setRandWord(sug.data[0].word)
          let war = sug.data[0].word
          console.log(`random word = ${war}`)
          const raw = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${war}`);
          setResponse(raw.data)
        } else {
          const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${params}`);
          setResponse(res.data)
        }
        setError(null) 
        
      }
      catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchApi(ctx.inputValue)
  }, [ctx.inputValue])

  ctx.setWord(randWord)
  if (loading) {
    return (
      <div className='flex flex-col space-y-3 animate-pulse p-4 container mx'>
        <div className='h-6 bg-gray-300 mt-5 rounded-md'></div>
        <div className='h-40 bg-gray-300 mt-5 rounded-md'></div>
        <div className='h-6 bg-gray-300 mt-5 rounded-md'></div>
      </div>
    )
  }

  if (error) {
    return <h1 className='container text-center font-semibold'>No definition found for { ctx.word }</h1>
  }
  
  return (
    <div className='container bg-gray-300 p-4 content'>
      {response && (<div>
        <Phonetics wordData={response} />
        <h3 className='text-xl font-bold mt-3'>Meaning and Definition:</h3>
        <Meanings wordData={ response} />
        <h3 className='text-xl font-bold mt-3'>Example:</h3>
        <Example wordData={ response}/>
        <h3 className='text-xl font-bold mt-3'>Synonyms:</h3>
        <Synonym wordData={ response } />
      </div>)}
    </div>
  )
}

export default Content;

