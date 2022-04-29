import React from 'react'

const Meanings = (props) => {
  return (
    <div>
      {props.wordData.map(item => item.meanings.map(means => means.definitions.map(
        (def) => (
          <div key={def.example}>
            {def.example &&
              <div>
                <li>{def.example}</li>
                <hr />
              </div>
            }
            
          </div>
        )
      )))}
    </div>
  )
}

export default Meanings