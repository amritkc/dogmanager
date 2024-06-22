import React, { useState } from 'react';
import './App.css';
import DogList from './components/dogsList/dogList';
import SendDataButton from './components/sendDataButton/sendDataButton';
import { getCurrentDateTime } from './utils/getCurrentDate';
import DogForm from './components/dogForm/dogForm';


interface Dog {
  name: string;
  age: number;
}

function App() {

  const [dogs, setDogs] = useState<Dog[]>([]);
  const [lastUpdate, setLastUpdate] = useState('');

  const addDogs = (name: string, age: number) => {
    console.log("sdasds", name)
    setDogs([...dogs, { name, age }])
    setLastUpdate(getCurrentDateTime())
  }

  return (
    <div className="App">
      <h1>Dog Manager</h1>
      <DogForm addDog={addDogs} />
      <DogList dogs={dogs} LastUpdate={lastUpdate} />
      <SendDataButton dogs={dogs} />
    </div>
  );
}

export default App;
