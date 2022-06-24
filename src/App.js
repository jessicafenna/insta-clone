import './App.css';
import { useEffect, useState } from 'react'
import { PictureContainer } from './components/pictureContainer';
import { InputForm } from './components/inputBox';
import { LogorSign } from "./components/logOrSign";
import image from './images/Logo-Instagram.png'

const  App = () => {
  const [user, setUser] = useState();
  const [pictures, setPictures] = useState([]);
  // useEffect runs immediately, anything in [] (dependency) that gets updated will trigger function to run again (if array is empty it will run only once)
  useEffect(() =>{ 
    handleFetch();
  }, []);

  //come back to this and put in new folder - in a utils then index.js (pass it a setter in parameters)
  const handleFetch = async () => { 
    const response = await fetch ('https://picsum.photos/v2/list')
    // this converts from json 
    const data = await response.json();
    setPictures(data);
    console.log(data);
  }
  return (
    <div className='App'>
      <img image = {image} alt = 'logo'></img>
      <h1>{ user? user : "Landing Page"}</h1>
      <LogorSign setter = {setUser}/>
      {pictures.map((item, index)=>{
        return(
          <div>
          {/* <InputForm/> */}
          <PictureContainer author = {item.author} url = {item.download_url} key = {index}/>
          </div>
        )
      })}
    </div>
  )
}

export default App;
