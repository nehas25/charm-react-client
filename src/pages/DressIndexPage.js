import React, { useState, useEffect } from 'react';
import DressesModel from '../models/DressesModel';
import CardsContainer from '../components/dressesindex/CardsContainer';

function DressIndexPage() {
    const [allDresses, setAllDresses] = useState(null);

    useEffect(() => {
        const fetchDresses = async () => {
            const response = await DressesModel.all();
            setAllDresses(response);
            console.log('fetched all dresses response ====> ', response);
        } ;
        console.log('Value of allDress===>', allDresses)
        if(allDresses === null) fetchDresses();
    });


    if(allDresses) {
        return <CardsContainer dressesArr={allDresses}/>
    } else {
        return <div>Sorry, no products found at this time.</div>
    }

}

export default DressIndexPage;