import logo from './logo.svg';
import './App.css';
import CardBlock from './components/CardBlock'
import Header from './components/Header'
import CardForm from './components/Cardform'
import Card from './components/Card'

function App() {

  const cards = [
    {
      id: 'e1',
      name: 'Ramon',
      age: '29',
      date: new Date(1992, 2, 28),
      height: '183',
      weight: '82'
    },
    {
      id: 'e2',
      name: 'Thais',
      age: '26',
      date: new Date(1994, 4, 29),
      height: '163',
      weight: '64'
    },
    {
      id: 'e3',
      name: 'Pedrinho',
      age: '1',
      date: new Date(2020, 4, 2),
      height: '95',
      weight: '10'
    }

  ]

  const addCard = (expenseData) => {
    console.log("Ramon");
    console.log(expenseData);

  }
    
  return (
    <div className="App">
      <Header />
      <CardForm onAddCard={addCard}/>
      <CardBlock cards={cards} >
      </CardBlock>
        
    </div>
  );
}

export default App;
