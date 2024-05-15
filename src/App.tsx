import { useEffect, useState } from 'react'
import './App.css'
import Character from './interfaces/Characters'
import { getCharacters } from './components/api/getData'
import { Card } from './components/Card'

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
    <div className='d-flex justify-content-around flex-wrap'>
      {
        characters.map((chr) => (
          <Card name={chr.name} species={chr.species} gender={chr.gender} image={chr.image} />
        ))
      }
    </div>
  )
}

export default App
