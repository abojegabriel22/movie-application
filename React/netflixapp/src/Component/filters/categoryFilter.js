import React from 'react';
import './category.css';
import axios from 'axios';

const url = "https://netflixapi-7fvc.onrender.com";

const categoryFilter = (props) => {

    const handleFilter = (event) => {
        let movieId = props.movieId;
        let categoryId = event.target.value;
        let categoryUrl = "";
        if(categoryId === ""){
            categoryUrl = `${url}/items?locationId=${movieId}`
        }else{
            categoryUrl = `${url}/filter/${movieId}?categoryId=${categoryId}`
        }

        axios.get(categoryUrl)
        .then((res) => {props.moviePerCategory(res.data)})

    }


    return(
        <>
            <h1 className='center'>Movies Category</h1><hr/>
            <div className='category' onChange={handleFilter}>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value=""/>all
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="1"/>sports
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="2"/>Music
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="3"/>Dance
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="4"/>Adventure
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="5"/>action
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="6"/>Horror
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="7"/>Comedy
                </label>
                <label className='checkbox d-block'>
                    <input type='checkbox' name='category' value="8"/>Drama
                </label>
            </div>
        </>
    )
}
export default categoryFilter