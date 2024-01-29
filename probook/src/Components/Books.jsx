import { useState, useEffect } from 'react'

import axios from "axios"

function Books() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then((res) => setData(res.data.books))
    .catch((error) => console.error(error))
  },[])

  return (
    <>
      {
        data.map(items => {
          return(
            <>
            <div>
              <h1>{items.title}</h1>
              <div className='des_div'>
                <img src={items.imageLinks.thumbnail} alt="" />
                <p>{items.description}</p>
              </div>
              <div className='authour'>
              {items.authors.map((ele, i) => {
                return <p key={i}>{ele}</p>
              })}
              </div>
              <hr></hr>
            </div>
            </>
          )
        })
      }
    </>
  )
}

export default Books