import './App.css'
import Card1 from './components/Card1.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Card2 from './components/Card2.jsx'

const App = () => {

  return (
    <>
    <NavBar />
    <About />
    <div className="card-container">
      <h1>Hello, welcome to my profile app!</h1>
      <Card1 />
      <Card2 />
    </div>
    </>
  )
}

export default App;
