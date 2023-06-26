
import { useEffect, useState } from 'react'

function App() {
  const [image, setImage] = useState([]);
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=37850907-dd8e0889d28b4e6430e2dc19b&&image_type=photo')
      .then(res => res.json())
      .then(data => setImage(data.hits))

  }, [])

  const handleSearch = () => {
    fetch(`https://pixabay.com/api/?key=37850907-dd8e0889d28b4e6430e2dc19b&q=${searchText}&image_type=photo`)
      .then(res => res.json())
      .then(data => setImage(data.hits))
  }

  return (
    <div className='w-10/12 mx-auto'>
      <div className='flex justify-center gap-5 items-center'>
          <input placeholder='Search Your Image' className='w-1/5 p-2 bg-slate-200 rounded-lg my-12' onChange={(e) => setSearchText(e.target.value)} type="text" name="" id="" />
        <button onClick={() => handleSearch()} className='bg-slate-200 p-2 px-8 rounded-lg hover:bg-slate-300 hover:shadow-xl'>Search</button>
      </div>
      <div className='grid grid-cols-4 gap-5 row-span-2 col-span-2'>
        {
          image?.map((img) => <div key={img.id}>
            <div className='w-full grid row-span-2 col-span-2'>
              <img className='w-full duration-500 hover:scale-110 rounded-lg' src={img.webformatURL} alt="" />
            </div>
          </div>)
        }
      </div>

    </div>
  )
}

export default App
