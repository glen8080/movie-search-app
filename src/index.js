
import React, { useState } from 'react'
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css'


        

function App(){

  const [searchText ,setSearchText] = useState("")
  const [container ,setContainer] = useState([])
  const [final,setFinal] = useState('')
  const [isTrue,setTrue] = useState(false)

  useEffect(()=>{
       fetchData()
       
  },[final])

  const fetchData = () =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a8e2b415d3msh808e517b27a5fb7p1778f3jsnfb05f9ca162c',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${searchText}`, options)
    .then(response => response.json())
    .then(response => setContainer(response.d))
    
    .catch(err => console.error(err));
}
    const onchangeHandler = (e) =>{
          setSearchText(e.target.value) 
    }
    const submitHandler=(e)=>{
      e.preventDefault()
      setTrue(true)
      setFinal(searchText)
    }
      
      return(
        <div>
           <div className='main_container'>
             <div className='search_container'>
               <form onSubmit={submitHandler} className='form_container'>
                 <input type="text" placeholder='Enter Movies,Artist,Title' onChange={onchangeHandler}  value={searchText}/>
                 <button type='submit'>SEARCH</button>
               </form>
             </div>
           {isTrue && <div className='second_container'>
            <div className='result_container'>
              {container.map((item,index)=>{
                return (
                     
                    <div className='movie_container' key={index}>
                      <img src={item.i.imageUrl} alt='movieImg'/>
                      <p className='text'>{item.l}</p>
                    </div>
                )
              })}
             </div>
            </div>}
           </div>
        </div>
      )

    }

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);