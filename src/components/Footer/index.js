import { FiInstagram, FiFacebook } from 'react-icons/fi';
import './styles.scss';

export function Footer() {
    return (
        <footer>
            <div className="email">
                <a href="mailto:gamer.power.help@gamerpower.com">
                    gamer.power.help@gamerpower.com
                </a>
            </div>

            <ul className='social'>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <FiInstagram />
                    </a>
                </li>

                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FiFacebook />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

