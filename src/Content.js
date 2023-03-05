import { useState } from "react";

const Content = () =>{
    const [name, setName] = useState('Bode');
    const handleNameChange = () => {
        const names = ['Bob','Kevin', 'Dave'];
        const int = Math.floor(Math.random() * names.length);
        setName(names[int]);
      }
      const handleClick = () => {
        console.log('You clicked it');
      }
      const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
      }
      const handleClick3 = (e) => {
        console.log(e.target.innerText);
      }
    return(
        <main>
            <p onDoubleClick={handleClick}>
             Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={() => handleClick2('Bode')}>Click It</button>
            <button onClick={(e) => handleClick3(e)}>Click It</button>
        </main>
    )
}

export default Content