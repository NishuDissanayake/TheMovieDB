import React,{useState, useEffect} from 'react'
import MovieItems from "./MovieItems";
import axios from "axios";

const Movielist=()=> {
    const [items,setitems] = useState([]);

    useEffect(() => {

        const key = "2ef0741a1518d38e2f9b4480dacf35b2";
    
        const getmoviedata = async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${key}`);
            setitems(res.data.production_companies);
        };
        getmoviedata();


    }, []);


    

    return (
        <div>
            <div className="container">
                <div className="row">

                    {items.map( (item)=>(
                    
                    <MovieItems key={item.id} item={item}/>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Movielist
