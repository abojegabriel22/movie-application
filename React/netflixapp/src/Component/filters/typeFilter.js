import React from 'react';
import './category.css';
import axios from 'axios';

const base_url = "https://netflixapi-7fvc.onrender.com";

const typeFilter = (props) => {

    const handleFilter = (event) => {
        let movieId = props.movieId;
        let typeId = event.target.value;
        let typeUrl = "";
        if(typeId === ""){
            typeUrl = `${base_url}/items?locationId=${movieId}`
        }else{
            typeUrl = `${base_url}/filter/${movieId}?typeId=${typeId}`
        }

        axios.get(typeUrl)
        .then((res) => {props.moviePerType(res.data)})

    }


    return(
        <>
            <hr/>
            <h1 className='center'>Movies Type</h1><hr/>
            <div className='category' onChange={handleFilter}>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value=""/>all
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="1"/>seasonal
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="2"/>serial
                </label>
            </div>
        </>
    )
}
export default typeFilter