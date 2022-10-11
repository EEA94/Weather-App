import React from 'react';
import styles from '../../styles/NavMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';

function NavMenu() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.containerLogo}>
      <Link href='/'><Image src='/img/logoSol.png' width={54} height={56} alt="logo"></Image></Link>
      <span className={styles.weatherApp}>Weather App</span>
    </div>
    <div>
    <Link href='/'>
        <a className={styles.home}>Home</a>
    </Link>
    </div>
    </nav>
  );
};

export default NavMenu;