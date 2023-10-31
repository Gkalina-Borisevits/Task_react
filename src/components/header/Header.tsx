import { FC } from "react";
import { NavLink } from "react-router-dom";
//import cn from 'classnames'
import styles from './Header.module.css'

const Header: FC = () => {
  console.log("Lets go!");
  return (
    <div className={styles.navbar}>
    <NavLink to="/">randomActivity</NavLink>
    <NavLink to="counter">counter</NavLink>
    <NavLink to="cityPage">cityPage</NavLink>
    <NavLink to="sandwich">sandwich</NavLink>
    <NavLink to="btnTest">btnTest</NavLink>
    <NavLink to="productPage">productPage</NavLink>
    <NavLink to="userPage">userPage</NavLink>
    <NavLink to="catCard">catCard</NavLink>
    <NavLink to="dogCard">dogCard</NavLink>
    <NavLink to="parent">parent</NavLink>
    {/* <NavLink to="form">form</NavLink> */}

    </div>
  );
};

export default Header;
