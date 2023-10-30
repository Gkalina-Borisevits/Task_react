import { FC } from 'react'
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
//import cn from 'classnames'
 import styles from './Layout.module.css'
import Footer from '../components/footer/Footer';

const Layout: FC = () => {
console.log('Lets go!');
return (
<div className={styles.container}>

<Header/>
<main className={styles.main}>
<Outlet/>
</main>
<Footer />
</div>

);
};

export default Layout