import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const FetchData = ( {cat}) => {
    const[Data,setData]=useState('');
    const fetchData = async()=>{
        await axios.get(cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=7d21eed45f5547feb7b1621cf0d2f324`
         : 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7d21eed45f5547feb7b1621cf0d2f324'
        ).then((res) => setData(res.data.articles))
    };
    useEffect(() => {
    fetchData();
    }, [cat])
  return (
    <div className='container my-4'>
    <h3>
      <u>   TOP Headlines</u>
    </h3>
    <div className='contaner d-flex justify-content-center align-items-center flex-column my-2' style={{minHeight:'100vh'}}>{Data ? 
    Data.map(
        (items,index)=>(
        <>
        <div className='container my-3 p-3' style={{width:'600px', boxShadow:'2px 2px 10px silver', borderRadius:'10px'}}>
          <h5>{items.title}</h5>
          <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src={items.urlToImage} alt='image not found' className='img-fluid ' style={{width:'100%',height:'300px',objectFit:'cover'}}/>
          </div>
         
          <p>{items.description}</p>
          <Link to={items.url} target="blank">View More</Link>
        </div>
             
        </>
        ))
        :'Loading...'}</div>
    </div>
  )
}

export default FetchData
