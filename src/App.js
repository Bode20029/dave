import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "item1"
    },
    {
        id: 2,
        checked: false,
        item: "item2"
    },
    {
        id: 3,
        checked: false,
        item: "item3"
    },
]);
const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item,
       checked: !item.checked } : item);
       setItems(listItems);
       localStorage.setItem('shoppinglist',JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  localStorage.setItem('shoppinglist',JSON.stringify(listItems));
}     
  return (
    <div className="App">
      <Header title="Grocery Lists" />
      <Content 
        items={items}
        
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer/>
    </div>
  );
}

export default App;
