import { useEffect, useState } from 'react'
import './App.css'
import Character from './interfaces/Characters'
import { getCharacters } from './utils/api/getData'

function App() {
const [characters, setCharacters] = useState<Character[]>([])

const getData = async() => {
  const data = await getCharacters()
  setCharacters(data)
}

useEffect(()=>{
  getData()
},[])

  return (
    <div>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>
    </div>
  )
}

export default App
