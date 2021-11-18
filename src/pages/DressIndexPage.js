import React, { useState, useEffect } from 'react';
import DressesModel from '../models/DressesModel';
import CardsContainer from '../components/dressesindex/CardsContainer';

function DressIndexPage() {
    const [allDresses, setAllDresses] = useState(null);

    useEffect(() => {
      fetchDresses();
    }, []);

    const fetchDresses = async () => {
      const fetchedDresses = await DressesModel.all();
      setAllDresses(fetchedDresses);
      console.log('fetched all dresses response ====> ', fetchedDresses);
    } ;


    if(allDresses) {
        return <CardsContainer dressesArr={allDresses}/>
    } else {
        return <div>Loading...</div>
    }

}

export default DressIndexPage;