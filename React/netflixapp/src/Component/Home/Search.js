import React,{useState,useEffect} from 'react';
import './Search.css';
import SearchDisplay from './SearchDisplay';

const base_url = 'https://netflixapi-7fvc.onrender.com';

const QuickSearch = () => {

    const [country,setCountry] = useState('');

    useEffect(()=>{
        fetch(`${base_url}/country`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setCountry(data)
        })
    },[])

 
    return(
        <>
            <section className='home' id='QuickSearch'>
                <div className='buttons'>
                    <div className='leftSelect'>
                        <h1>
                            <span className='netflix'>netflix</span> Movies Category
                        </h1>
                        <SearchDisplay countryData={country}/>
                        
                    </div>
                </div>
                <div className="buttons"></div>
            </section>
        </>
    )
}
export default QuickSearch;


// import React from 'react';

// const QuickSearch = () => {
//     return(
//         <>
//             <h1>QuickSearch</h1>
//         </>
//     )
// }
// export default QuickSearch;