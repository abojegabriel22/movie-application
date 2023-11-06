import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                        <div className="item" key={item._id}>
                            <section className="row">
                                <div className="col-md-12 imgBox">
                                    <Link to={`/details?movieId=${item.id}`} className="imgBox">
                                    <img src={item.image} alt={item.name}/>
                                    </Link>
                                </div>
                                <div className="col-md-12 texts">
                                    <h1>{item.name}</h1>
                                    {/* <p className="gray">Movie Year:&nbsp;{item.year}</p>
                                    <p className="text-warning">Rated:&nbsp;&nbsp;{item.age}</p>
                                    <p className="gray dim">Category:&nbsp;&nbsp;{item.category_id}</p>
                                    <p className="gray dim">Type:&nbsp;&nbsp;{item.type_id}</p> */}
                                </div>
                            </section>
                        </div>
                    )
                })
            }else{
                return(
                    <center className="nodata">
                        <h2>No Data Found</h2>
                    </center>
                )
            }
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
        <div className="imageDiv">
            {renderData(props)}
        </div>
    )
}
export default ListingDisplay;