import {FaLinkedin, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <FaLinkedin/>
                </li>
                <li>
                    <FaGithub/>
                </li>
            </ul>
            <p className={styles.copyRight}><span>Costs</span>&copy; 2022</p>
        </footer>
    )
}