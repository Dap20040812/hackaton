import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Project from './components/project/Project'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
