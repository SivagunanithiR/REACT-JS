import React, { useState } from 'react'
import img1 from '../Images/book1.png'
import Card from './Card'
import axios from 'axios'
import '../FullstackBooks/FullstackBooks.css' 
import img from '../Images/logo.jpg'
const FullstackBooks = () => {
     const [search,setSearch]=useState("");
     const[bookData,setData]=useState([]);
    const searchBook=(evt)=>{
      if(evt.key==="Enter"){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+ '&key=AIzaSyDS9vIL4AqRlWSrv7WDqN1EotwpCeT8gb0'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
      }
    }
    
  return (
    <>
    <div className='body'>
    <div className='header'>
    <img src={img} width={100} height={100}></img>
      <h1>hiii</h1>
        <div className='row1'>
        </div></div>
        <div className='row2'>
            <h2>Find your Book</h2>
            <div className='search'>
                <input type="text" placeholder='Enter Your Book Name' value={search} onChange={e=>setSearch(e.target.value)}onKeyPress={searchBook}></input>
                
                <button>search</button>
            </div>
            
        </div>
       <div className='cont'>
        {
        <Card book={bookData}/>
}

       </div>
       </div>
    </>
  )
}

export default FullstackBooks
