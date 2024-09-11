import ConteudoPrinc from './Components/ConteudoPrinc'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Container from './Components/Container'

function App() {

  return (
    <>
      <Header/>
      <Container>
       <SideBar/>
       <ConteudoPrinc/>
       </Container>
    </>
  )
}

export default App
