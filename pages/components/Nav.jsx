import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from '../../styles/Nav.module.css';
import Image from 'next/image';
import Link from 'next/link.js';

function Nav({onSearch}) {
  return (
    <nav className={styles.navbar}>
    <div className={styles.containerLogo}>
      <Image src='/img/logoSol.png' width={54} height={56} alt="logo"></Image>
      <span className={styles.weatherApp}>Weather App</span>
    </div>
    <div>
      <Link href='/components/About'><a className={styles.about}>About</a></Link>
    </div>
    <div>
    <SearchBar onSearch={onSearch}/>
    </div>
    </nav>
  );
};

export default Nav;
