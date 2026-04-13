import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [photo, setphoto] = useState([]);
  async function getData() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`);
    setphoto(response.data);
  }

  const [index, setindex] = useState(0)

  const next = () => {
    setindex(index + 1)
    setphoto([])
  }
  const prev = () => {
    if (index > 0) {
      setindex(index - 1)
      setphoto([])
    }
  }

  useEffect(() => {
    getData();
  }, [index])

  let printUserData = 'loading...'
  if (photo.length > 0) {
    printUserData = photo.map((el, idx) => {

      return (<>
        <div className='h-40 w-60  m-2' key={idx}>
          <img className='h-full object-cover' src={el.download_url} alt="photo" />
          <p>{el.author}</p>
        </div>
      </>)

    })
  }
  return (
    <div>
      <h1 className='flex fixed m-5 text-4xl text-red-400'>{index}</h1>

      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-10'>
        <button className='bg-yellow-300 text-black px-5 py-2 my-20 rounded-3xl ' onClick={() => {
          prev()
        }}>Prev</button>
        <button className='bg-yellow-300 text-black px-5 py-2  my-20 rounded-3xl' onClick={() => {
          next()
        }}>Next</button>
      </div>

    </div>
  )
}

export default App