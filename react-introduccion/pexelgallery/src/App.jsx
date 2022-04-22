import { useState ,useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import { getImages } from './service/Api'
function App() {
  const [images, setImages] = useState([])
  useEffect(() => {
    getImages().then(res => {
      setImages(res)
    }).catch(err => {
      console.log(err)
    })
  })
  const imgView = images.map((image, index) => {
    return(
      <div key={index}>
        <img src={image.src.small} alt={image.alt} />
        <p>{image.alt}</p>
      </div>
    )
  })



  return (
    <div className="App">
      {imgView}
    </div>
  )
}

export default App
