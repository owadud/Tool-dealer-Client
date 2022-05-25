import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ToolItems = () => {

    const [items, setItem] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => 
                setItem(data));
            
    }, [])
    return (
        <div className='tools'>
            <h1>Please Book your Item before Stock out</h1>
            <div className='py-5 grid lg:grid-cols-3  gap-5 py-10 sm:grid-cols-1'>
                {
                    items.map(item =><ItemList 
                    key={item._id} item={item}>

                    </ItemList>)
                }
            </div>
        </div>
    );
};

export default ToolItems;