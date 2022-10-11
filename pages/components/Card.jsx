import React from 'react';
import styles from '../../styles/Card.module.css';
import Image from 'next/future/image';

export default function Card ({min, max, name, img, onClose, id, description, visibility, humidity, wind}) {
    return (
      <div className={styles.card}>
        
        <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <img src={"https://openweathermap.org/img/wn/"+img+"@2x.png"} alt={name} />
              <small className={styles.description}>{description}</small>
          </div>

          <div className={styles.details}>
            <div className={styles.minMax}>
              <p>Min: <span>{min}°</span></p>
              <p>Max: <span>{max}°</span></p>
            </div>
              <p>Visibility: <span>{visibility} Km</span></p>
              <p>Humidity: <span>{humidity} %</span></p>
              <p>Wind: <span>{wind} Km/h</span></p>
          </div>
          <div>
            <button className={styles.onClose} onClick={onClose} >x</button>
        </div>
        
      </div>
    );
};