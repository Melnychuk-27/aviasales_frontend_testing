import React from 'react';

import './ticket-cart-item.css' 

function toZero(time) {
  time = !String(time).slice(1)  ? `0${time}`: time;
  return time;
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function getHoursAndMinuts(duration,data) {
  let date = data.slice(11,16)
  let timeDate = (duration/60).toFixed(2);
      let hoursDate = date.slice(0,2)
      let minutesDate = date.slice(3)
      let hours = timeDate.slice(0,2)
      let minutes = timeDate.slice(3)

      if(minutes>=60) {
        minutes = minutes-60; 
        hours++
      }
      minutesDate = Number.parseInt(minutes,10) + Number.parseInt(minutesDate,10);
      if (minutesDate>=60) {
        minutesDate = minutesDate-60; 
        hoursDate++;
      }
      
      hoursDate = Number.parseInt(hours,10) + Number.parseInt(hoursDate,10);
      if(hoursDate>=24) {
        hoursDate = hoursDate-24; 
      }
      if(hours>=24) {
        hours = hours-24; 
        
      }
      minutes = toZero(minutes);
      hours = toZero(hours);
      minutesDate = toZero(minutesDate);
      hoursDate = toZero(hoursDate);
   return {
      minutes,
      minutesDate,
      hours,
      hoursDate
   }
}


export default function  TicketCartItem({item}) {
    const {price, segments} = item

    const {date,destination,duration,origin,stops} = segments[0]
    const {date: dateBack,destination: destinationBack,duration: durationBack,origin: originBack,stops : stopsBack} = segments[1]
    
    const {minutes,hours,hoursDate,minutesDate} = getHoursAndMinuts(duration,date)
    const {minutes: minutesBack,hours: hoursBack,hoursDate: hoursDateBack,minutesDate: minutesDateBack} = getHoursAndMinuts(durationBack,dateBack)
  
  return (
    <div className='ticket' key={price}>
      <div className='ticket__head'>
        <div className='ticket__price'>
          {`${numberWithSpaces(price)} P`}
        </div>
        <div className='ticket__logo'>
          <img src="./img/S7-Logo.png" alt="S7 Logo" />
        </div>
      </div>
      <div className='ticket__body'>
        <div className='ticket__body-there'>
          <div className='ticket__origin'>
            <div className='ticket__cities'>
              {`${origin.toUpperCase()}-${destination.toUpperCase()}`}
            </div>
            <div className='ticket__departure'>
              {`${date.slice(11,16).toUpperCase()}-${hoursDate}:${minutesDate}`}
            </div>
          </div>
          <div className='ticket__duration'>
            <div className='ticket__action'>
              В ПУТИ
            </div>
            <div className='ticket__time'>
              {`${hours}ч ${minutes}м`}
            </div>
          </div>
          <div className='ticket__stops'>
            <div className='ticket__number-of-transplants'>
            {stops.length> 0 ? stops.length === 1 ?`${stops.length} ПЕРЕСАДКA`:`${stops.length} ПЕРЕСАДКИ`: null}
            </div>
            <div className='ticket__cities-transplants'>
              {stops ? stops.map((item)=>{ return `${item} `}): null}
            </div>
          </div>
        </div>
        <div className='ticket__body-back'>
          <div className='ticket__origin'>
            <div className='ticket__cities'>
            {`${originBack.toUpperCase()}-${destinationBack.toUpperCase()}`}
            </div>
            <div className='ticket__departure'>
              {`${dateBack.slice(11,16).toUpperCase()}-${hoursDateBack}:${minutesDateBack}`}
            </div>
          </div>
          <div className='ticket__duration'>
            <div className='ticket__action'>
              В ПУТИ
            </div>
            <div className='ticket__time'>
              {`${hoursBack}ч ${minutesBack}м`}
            </div>
          </div>
          <div className='ticket__stops'>
            <div className='ticket__number-of-transplants'>
              {stopsBack.length> 0 ? stopsBack.length === 1 ?`${stopsBack.length} ПЕРЕСАДКA`:`${stopsBack.length} ПЕРЕСАДКИ`: null}
            </div>
            <div className='ticket__cities-transplants'>
              {stopsBack ? stopsBack.map((item)=>{ return `${item} `}): null}
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}
