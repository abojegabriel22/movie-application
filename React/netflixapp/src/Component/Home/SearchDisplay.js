import React from "react";
import { Link } from "react-router-dom";

const QuickDisplay = (props) => {
    const listCountry = ({countryData}) => {
        if(countryData){
            return countryData.map((item) => {
                return(
                    
                    <Link to={`/listing/${item.location_id}`} className="linkD">
                        <input type="checkbox"/>
                        <span className="space">{item.location_name}</span><br/>
                    </Link>
                )
            })
        }else{
            return(
                <div className="loader">
                    <center>
                    <h2>Loading, Please wait!</h2>
                    <img src="/images/loader.gif" alt="loader"/>
                    </center>
                </div>
            )
        }
    }


    return(
            <div className='movieSearch'>
                {listCountry(props)}
            </div>
    )
}
export default QuickDisplay