import { useEffect, useState } from 'react'
import Container from './Components/Container'
import ConteudoPrinc from './Components/ConteudoPrinc'
import Header from './Components/Header'
import SideBar from './Components/SideBar'

function App() {
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .then(err => console.log(err))
  }, [])




  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <ConteudoPrinc>
        {
          artistas.map(artista => (
          <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
          <p>{artista.name}</p>
          <div className="bg-green-400 w-3/4 h-7"></div>
        </div>
        ))
        }

        </ConteudoPrinc>
      </Container>
    </>
  )
}

export default App
