import React from 'react'

const Synonym = (props) => {
  return (
    <div>
      {props.wordData.map(item => item.meanings.map(means =>
      {
        return means.synonyms?.map(syn => (
          <span>{syn}, </span>
        ))}
        
      ))}
    </div>
  )
}

export default Synonym