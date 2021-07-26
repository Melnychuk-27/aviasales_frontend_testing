import React, {useState} from 'react';
import './app.css' 
import TicketsService from "../../services/ticketsstore-service";
import TicketsCarts from "../ticket-carts";
import NumberOfTransplants from '../../components/number-of-transplants';
import FilterTickets from '../../components/filter-tickets';

function  App() {
  const [filter, setFilter] = useState();
  const [transplants, setTransplants] = useState();
  const {tickets, loadin} = TicketsService();
  let onlyTickets = [];
  let [nameMas, setNameMas] = useState([]);
  function onFilterChange(filter)  {
    setFilter(filter);
  };

  function onTransplantsChenge(name) {
    
    if(!nameMas.includes(name)){
      setTransplants(name)
      
      setNameMas([...nameMas,name])
      
    } else {
      let index = nameMas.findIndex(item => item === name)
      setNameMas( [
        ...nameMas.slice(0, index),
        ...nameMas.slice(index + 1)
      ]);
    }
  }
  if(loadin) {
    return null;
  }
  if(!loadin) {
    for (let [key, value] of Object.entries(tickets)) {
      if(key === 'tickets'){
        onlyTickets.push(value);
      }
    }
  }
  
  return (
    <div className='app'>
      <img src="./img/Logo.png" alt="Logo" className='logo'/>
      <div className='app__body'>
          <NumberOfTransplants onTransplantsChenge={onTransplantsChenge} nameMas={nameMas}/>
        <div className='container'>
          <FilterTickets 
            filter={filter}
            onFilterChange={onFilterChange} 
            />
          <TicketsCarts onlyTickets={onlyTickets} filter={filter} transplants={transplants}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;