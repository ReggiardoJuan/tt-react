import styles from './Loader.module.css';
import LoaderImage from '../../assets/loaderImage';

export default function Loader({ size = 48 }) {
    return <div className={styles['loader-container']}>
        <LoaderImage className={styles['loader-icon']} size={size}/>
    </div>;
}
