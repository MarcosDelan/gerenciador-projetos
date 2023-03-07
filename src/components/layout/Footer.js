import {FaJsSquare, FaHtml5, FaReact} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaJsSquare />
                </li>
                <li>
                    <FaHtml5 />
                </li>
                <li>
                    <FaReact />
                </li>
            </ul>
            <p>
                <span>Delan Tech</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer