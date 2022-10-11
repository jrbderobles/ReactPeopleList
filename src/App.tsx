import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'John Doe',
      age: 29,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgD-7kP3hbPiQYBy6N3-pWaFqUNgsUwKE9XVydJQ&s',
      note: 'This is a sample note.'
    }
  ]);

  return (
    <div className='App'>
      <h1>People Invited to Party</h1>
      <List people={people} />
      <AddToList />
    </div>
  );
}

export default App;
