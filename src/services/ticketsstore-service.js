/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

import useFetch from "./useFetch";


function BookstoreService() {

  const [searchId,setSearchId] = useState();
  const [tickets ,setTickets ] = useState([]);
  const {get} = useFetch('https://front-test.beta.aviasales.ru/');
  const [loadin,setLoading] = useState(true);

  useEffect(()=>{
    get('search')
    .then(data=> {
      if(data){
        setSearchId(Object.values(data));
    }
    })
    .catch(error => console.log(error))
  }, []);

  useEffect(()=>{
    if(searchId){
      get(`tickets?searchId=${searchId}`)
      .then(data=> {
          setTickets(data);
          setLoading(false);
      })
      .catch(error => console.log(error))
    }
  }, [searchId])
  return {
    tickets,
    loadin
  }
}

export default BookstoreService;
