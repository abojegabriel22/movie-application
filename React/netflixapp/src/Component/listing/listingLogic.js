import React,{useState,useEffect} from "react";
import './listing.css';
import { useParams } from "react-router-dom";
import ListingDisplay from "./listingDisplay";
import axios from 'axios';
import MoviesFilter from '../filters/categoryFilter';
import TypeFilter from "../filters/typeFilter";
import Header from "../Header";

const base_url = 'https://netflixapi-7fvc.onrender.com';

const Listing = () =>{
    let params = useParams();

    const [movieList,setMovieList] = useState();
    let movieid = params.movieId;
    
    useEffect(()=>{
        
        sessionStorage.setItem('movieId',movieid)
        axios.get(`${base_url}/items?locationId=${movieid}`)
        .then((res)=>{
            setMovieList(res.data)
        })
    },[])

    const setDataPerFilter = (data) => {
        setMovieList(data)
    }
    
    return(
        <>
            <Header/>
            <section className="home1">
                <div className="fullWidth">
                    <div className="half">
                        <h1>Movies</h1>
                        <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
                    </div>
                    <div className="half"></div>
                    <div className="content">
                        <div className="filter">
                            <MoviesFilter movieId={movieid} moviePerCategory={(data) => {setDataPerFilter(data)}}/>
                            <TypeFilter movieId={movieid} moviePerType={(data) => {setDataPerFilter(data)}}/>
                        </div>
                        <div className="flex">
                            <ListingDisplay listData={movieList}/>
                        </div>
                        
                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Listing;