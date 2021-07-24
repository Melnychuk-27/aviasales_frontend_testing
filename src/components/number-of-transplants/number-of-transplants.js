import React from 'react';

import './number-of-transplants.css' 

export default function  NumberOfTransplants({onTransplantsChenge,nameMas}) {


  const filterButtons = [
    { name: 'all', label: 'Все'},
    { name: 'withoutTransfers', label: 'Без пересадок'},
    { name: '1-Transfers', label: '1 пересадка'},
    { name: '2-Transfers', label: '2 пересадки'},
    { name: '3-Transfers', label: '3 пересадки'}
  ];


    const box = filterButtons.map(({name, label}) => {
      const isActive = nameMas.includes(name);
      // console.log(nameMas)
      const classNames = isActive ? 'label__box-active' :'label__box';
      return (
        <label className={classNames} key={name}><input
                type="checkbox"
                name={name}
                onClick={()=>onTransplantsChenge(name)}
                /><span className="pseudocheckbox">{label.toUpperCase()}</span></label>
      );
    });
  
    return (
      <div className='numberOfTransplants'>
      <div className='numberOfTransplants__head'>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </div>
      <div className='numberOfTransplants__body'>
          {box}
      </div>
    </div>); 

}
  // return (
  //   <div className='numberOfTransplants'>
  //     <div className='numberOfTransplants__head'>
  //       КОЛИЧЕСТВО ПЕРЕСАДОК
  //     </div>
  //     <div className='numberOfTransplants__body'>
  //         <label><input type="radio" value="all" name="transplant"/> Все </label>
  //         <label><input type="radio" value="NoTransfers" name="transplant" /> Без пересадок </label>
  //         <label><input type="radio" value="1transplant" name="transplant" /> 1 пересадка </label>
  //         <label><input type="radio" value="2transplant" name="transplant" /> 2 пересадки </label>
  //         <label><input type="radio" value="3transplant" name="transplant" /> 3 пересадки </label>
  //     </div>
  //   </div>); 