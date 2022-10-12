import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState, useEffect} from 'react';
const key = process.env.NEXT_PUBLIC_KEY;

export default function Home() {
  const [cities, setCities] = useState([]);

  useEffect(()=>{
    getCoord()
  },[])
  
  function getCoord(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success,error,options);
    }
    else{
      alert("puedes obtener la geolocalización")
    }

    let options ={
      EnableHighAccurracy: true,
      Timeout: 500,
      MaximumAge:0
    }

    function success(geolocationPosition) {
      const coords = [];
      let state = '';
      coords.push(geolocationPosition.coords.latitude , geolocationPosition.coords.longitude,);

      if(coords){
        fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${coords[0]}&lon=${coords[1]}&limit=1&appid=${key}`)
        .then(r=>r.json())
        .then((res)=>fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res[0].name},${res[0].state},${res[0].country}&appid=${key}&units=metric`))
        .then(r => r.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            console.log(recurso);
            const ciudad = {
              min: recurso.main.temp_min.toFixed(1),
              max: recurso.main.temp_max.toFixed(1),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: (recurso.wind.speed * 3.6).toFixed(1),
              temp: recurso.main.temp,
              name: recurso.name,
              humidity: recurso.main.humidity,
              visibility: (recurso.visibility/1000).toFixed(1),
              description: recurso.weather[0].description,
            };
            setCities(oldCities => [ciudad]);
            
          } else {
            alert("Ciudad no encontrada");
          }
        })

      }
    }

    function error(err) {
      console.log(err);
      return err.message
    }
  }

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        console.log(recurso)
        if(recurso.main !== undefined){
          const ciudad = {
              min: recurso.main.temp_min.toFixed(1),
              max: recurso.main.temp_max.toFixed(1),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: (recurso.wind.speed * 3.6).toFixed(1),
              temp: recurso.main.temp,
              name: recurso.name,
              humidity: recurso.main.humidity,
              visibility: (recurso.visibility/1000).toFixed(1),
              description: recurso.weather[0].description,
          };
          let verifyRepeat = false;
          cities.forEach((e)=>{
            if(e.id === recurso.id) verifyRepeat=true;
          })
          !verifyRepeat ? setCities(oldCities => [...oldCities, ciudad]):alert('Ciudad ya agregada');
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }

  return (
    <div >
      <Head>
        <title>Weather App</title>
        <meta name="description" content="This app allows you to see details of the current weather in the city of your choice." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
      <Nav onSearch={onSearch}/> 
      <Cards cities = {cities} onClose={onClose}/>
      </main>
    </div>
  )
}