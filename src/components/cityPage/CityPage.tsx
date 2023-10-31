import {FC, useState} from 'react'
import styles from "./CityPage.module.css";
import MyButton from '../myButton/MyButton';

const CityPage: FC = () => {
    const [isBerlin, setIsBerlin] = useState(true);

    function toggleCity(): void {
        setIsBerlin(!isBerlin);
    }

    const cityData = isBerlin ? {
        name: 'Berlin',
        title: 'Capital of Germany',
        imgUrl: "https://bcw-gruppe.scene7.com/is/image/bcw/AdobeStock_188166474:4-3"
    } : {
        name: 'Paris',
        title: 'Capital of France',
        imgUrl: "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
    };

    return (
    <div className={styles.container}>
    <h1>{cityData?.name}</h1>
    <p>{cityData?.title}</p>
    <div className={styles.imgWrapper}>
    <img className='berlinImg' src={cityData?.imgUrl} alt=''></img>
    </div>
    <MyButton onClick={toggleCity} text={isBerlin ? 'switch to Paris' : 'back to Berlin'} />
    </div>
)
}
export default CityPage;