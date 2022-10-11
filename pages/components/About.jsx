import NavMenu from "./NavMenu";
import styles from "../../styles/About.module.css";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Weather App</title>
        <meta name="description" content="Information about this application"/>
      </Head>
      <NavMenu />
      <div className={styles.aboutContainer}>
        <h2>About this page</h2>
        <b>
          ▪ This is a page designed in NEXT.JS that displays the current weather.<br/>
          ▪ The data that can be displayed on the screen comes from the API:
          <a href="https://openweathermap.org/api">Open Weather Map</a><br/> 
          ▪ If the user gives access to his location the page can display the weather
          data at his current position.<br/>
          ▪ You can also view weather details for a specific city by searching in the top bar.<br/> 
          ▪ The programming language used is Javascript, the styles were made with pure CSS and the deploy
          in Vercel.
        </b>
      </div>
    </div>
  );
}
