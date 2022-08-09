import React, {useState, useEffect} from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  const [results, setResults] = useState([]);
  // Fetch data, set data to setResults
  // Only load data once when React loads
  // by adding dependency array
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4')
    .then(response => response.json())
    .then(data => {
      setResults(data.results)
    });
  },[])
 
  return (
    <div className='cards'>
      {results.map((result, index) => {
        return(
          <ContactCard key={index}
          name= {result.name.first} 
          email={result.email}
          age= {result.dob.age}
          avatar = {result.picture.large}/>
        );
      })}
    </div>
  );
}
export default App;
