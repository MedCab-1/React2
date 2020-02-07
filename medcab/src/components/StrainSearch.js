import React, { useState, useEffect } from "react";
import axios from 'axios';

const StrainSearch = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios
            .get(``, {
                params: {
                    key: ''
                }
            })
            .then(res => {
                console.log(res);
                const strains = res.data.filter(strain => 
                    strain.name.toLowerCase().includes(query.toLowerCase()));
                setData(strains);
            });
    }, [query]);

    const handleInputChange = e => {
        setQuery(e.target.value);
    };
    return (
        <div className='strain-search'>
            <form className='search'>
                <input
                    type='text'
                    onChange={handleInputChange}
                    value={query}
                    placeholder='Search by Strain Name'
                    autoComplete='off'
                    />
            </form>
            {/* <div>
                {data.map(data => {
                    return (
                        <div className='strain-list' key={data._id}>
                           <h2>{data.name}</h2>
                    )
                })}
            </div> */}
        </div>
    );
};export default StrainSearch;