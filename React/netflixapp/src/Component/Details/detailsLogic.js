import React,{useState,useEffect} from "react";
import './details.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams, useSearchParams, } from "react-router-dom";
import Header from "../Header";

const base_url = 'https://netflixapi-7fvc.onrender.com';

const DetailDisplay = () => {

    let [searchParams] = useSearchParams();
    let [movieDetails, setMovieDetails] = useState();
    let [movieIdd] = useState(sessionStorage.getItem('movieId'));
    
    let moviesId = searchParams.getAll('movieId');
    const movieDetail = async() => {
        const rdata = await axios.get(`${base_url}/items/${moviesId}`);
        setMovieDetails(rdata.data[0]);
    }

    useEffect(()=>{
        movieDetail()
    },[])

    const renderItems = () => {
        if(movieDetails){
            return(
                <>
                    <div className="row dRow">
                        <div className="col-md-6 fullImage">
                            <img src={movieDetails.image} alt={movieDetails.name}/>
                        </div>
                        <div className="col-md-6">
                        <h1>{movieDetails.name}</h1>
                            <p>{movieDetails.info}</p><hr/>
                            <div className="info">
                                <h5>movie name:&nbsp;&nbsp;{movieDetails.name}</h5>
                                <h5>movie ratings:&nbsp;&nbsp;{movieDetails.age}</h5>
                                <h5>movie year:&nbsp;&nbsp;{movieDetails.year}</h5><hr/>
                            </div>
                            <div className="btn btn-primary primary">
                                <Link to={movieDetails.watch} className="white" target="blank">watch</Link>
                            </div>&nbsp;&nbsp;
                            <div className="btn btn-danger">
                                <Link className="white" to={`/listing/${movieIdd}`}>go back</Link>
                            </div>
                        </div>
                </div>
                </>
            )

        }else{
            return(
                <center>
                    <div className="loader">
                        <h2>Loading, Please wait!</h2>
                        <img src="/images/loader.gif" alt="loader"/>
                    </div>
                </center>
            )
        }
    }

    return(
        <>
            <Header/>
            <div className="container containerColor">
                {renderItems()}
            </div>
        </>
    )

}
export default DetailDisplay