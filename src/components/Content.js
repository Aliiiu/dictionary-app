import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import WordContext from '../store/word-context';
import Meanings from './Meanings';
import Example from './Example';
import Synonym from './Synonym';
import Phonetics from './Phonetics';
// axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'
const Content = () => {
  const ctx = useContext(WordContext)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${ctx.inputValue}`);
        setResponse(res.data)
        setError(null)
      }
      catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    if (ctx.inputValue.length) {
      fetchApi()
    }
  }, [ctx.inputValue])

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
    return <h1 className='container text-center font-semibold'>No definition found</h1>
  }
  
  console.log(response)
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

export default Content