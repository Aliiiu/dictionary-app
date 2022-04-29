import React from 'react'

const Meanings = (props) => {
  return (
    <div>
      {props.wordData.map(item => item.meanings.map(means => means.definitions.map(
        (def) => (
          <div>
            {def.definition && (
              <div>
                <li key={def.definition} > <b>{ means.partOfSpeech }</b> -- {def.definition}</li>
                <hr />
              </div>
            )}
            
          </div>
        )
      )))}
    </div>
  )
}

export default Meanings