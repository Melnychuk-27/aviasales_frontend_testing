import React, {useState} from 'react';
import TicketCartItem from '../ticket-cart-item';

import './ticket-carts.css' 

export default function  TicketsCarts({onlyTickets, filter,transplants}) {
  const [numberOfЕickets, setNumberOfЕickets] = useState(5)
  

  function filterTransplants(transplants){
    switch(transplants) {
      case 'withoutTransfers': onlyTickets = onlyTickets.map(item=> {
        return  item.filter((item)=> {
          return item.segments[0].stops.length === 0;
        });
      }); 
        return;
      case '1-Transfers':onlyTickets = onlyTickets.map(item=> {
        return  item.filter((item)=> {
          return item.segments[0].stops.length === 1;
        });
      });
      return;
      case '2-Transfers':onlyTickets = onlyTickets.map(item=> {
        return  item.filter((item)=> {
          return item.segments[0].stops.length === 2;
        });
      });
        return;
      case '3-Transfers':onlyTickets = onlyTickets.map(item=> {
        return  item.filter((item)=> {
          return item.segments[0].stops.length === 3;
        });
      });
        return;
      default: 
        return onlyTickets;
    }
    
  }
  
  filterTransplants(transplants)

  function filterItems(filter){
    switch(filter) {
      case 'cheap': onlyTickets = onlyTickets.map(item=> {
        return  item.sort((a,b)=>a.price-b.price);
      })
        return ;
      case 'fast': onlyTickets = onlyTickets.map(item=> {
        return  item.sort((a,b)=>a.segments[0].duration-b.segments[0].duration);
      }) 
        return;
      default: 
        return onlyTickets;
    }
    
  }

  filterItems(filter)

  let ticketsForRender = onlyTickets[0].filter((item,index) => {
    if(index< numberOfЕickets )
    {
      return item;
    }
    return false;
  })

  function onCartMore() {
    setNumberOfЕickets((prev)=>{return prev+5})
  }
  
  return (
    <div className='tickets-carts'>
      {
        ticketsForRender.map((item) => {
          return <TicketCartItem item={item} />
        })
      }
    <button className='btn-more' onClick={onCartMore}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
    </div>
  ); 
}
