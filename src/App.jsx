import React,{useEffect} from 'react';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box'
import './App.css';

function App() {
  const [monsters, setMonsters] = React.useState([])
  const [search, setSearch] = React.useState("")
  

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setMonsters(data))
  },[])

  const monstersAns = monsters;
  const searchMonster = search;

  const handleChange = (e) => {
    setSearch(e.target.value)
  }


  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchMonster.toLowerCase())
    )
  console.log(filteredMonsters)
  return (
    <div className="App">
      <SearchBox placeholder="monster search" handleChange={handleChange} />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
