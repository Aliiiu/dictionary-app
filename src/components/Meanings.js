import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Meanings = (props) => {
  return (
    <div>
      {props.wordData.map(item => item.meanings.map(means => means.definitions.map(
        (def) => (
          <div key={uuidv4()}>
            {def.definition && (
              <div key={uuidv4()}>
                <li key={uuidv4()}> <b>{ means.partOfSpeech }</b> -- {def.definition}</li>
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