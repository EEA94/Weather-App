import React, { useState } from "react";
import styles from '../../styles/SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input 
        className={styles.inputText}
        type="text"
        placeholder="City..."
        value = {city}
        onChange={(e) => setCity(e.target.value)}
       
      />
      <input 
        className={styles.inputButton} 
        type="submit" 
        value="Add" />
    </form>
  );
}
