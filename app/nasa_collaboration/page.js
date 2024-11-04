"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "eIHrNKxbUnq1lNBHdoSMLh6PctlNbq8aXADnLASd";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

 const RoverPhoto = ({ src, date, roverName }) => {
   return (
     <div className={styles.nasaPicOfTheDayImg}>
       <img src={src} alt={`Rover: ${roverName} on ${date}`} />
       <p className={styles.roverText}>{`Date: ${date}`}</p>
       <p className={styles.roverText}>{`Rover: ${roverName}`}</p>
     </div>
   );
 };

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(response => response.json());
      setRoverPhoto(roverPhotoResponse);
    };

    const fetchData = async () => {
      try {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay);
      const dailyImg = await dailyImgResponse.json();
      setDailyImg(dailyImg);
      } catch (error) {
      console.error("Error fetching astronomy picture of the day:", error);
      alert("An error occurred while fetching the astronomy picture of the day.");
      }
    };

    fetchRoverPhotos();
    fetchData();

  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {/* TASK - React 1 week 3 */}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here */}
          {/* You should display the title, explanation, and the image using the url from the response */}
          {/* <img src={dailyImg.url}> */}
          {dailyImg && dailyImg.url ? (
            <div className={styles.collaborationItem}>
              <img
                src={dailyImg.url}
                title={dailyImg.title}
                alt={dailyImg.title}
              />
              <h3 className={styles.collaborationTitle}>{dailyImg.title}</h3>
              <p className={styles.collaborationText}>{dailyImg.explanation}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {/* TASK - React 1 week 3 */}
          {/* Iteratate over the roverPhoto?.photos array and display all the pictures! */}

          {/* TASK - React 1 week 3 */}
          {/* Create a react component for the <RoverPhoto />, which should accept the following props */}
          {/* 1. src: source of the img (img_src in the data from the API) */}
          {/* 2. date: earth_date data coming from the API */}
          {/* 3. roverName: will be in the rover object - rover.name */}

          {/* TIPS: */}
          {/* If you don't know how the data looks like you can: */}
          {/* 1. use console.log() to write the data to the console */}
          {/* 2. use the network tab in the developer tab - https://developer.chrome.com/docs/devtools/network */}
          <div className={styles.roverPhotoContainer}>
            {roverPhoto?.photos?.length ? (
              roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))
            ) : (
              <p>Loading rover photos...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default NasaCollaboration;