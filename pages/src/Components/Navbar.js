import Style from './Styles/Navbar.module.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function navbar(){
    return(
        <div>
            <nav className={Style.container}>
                <ul>
                    <li> <a> <FontAwesomeIcon icon="map-marker"/> locality  </a> </li>
                    <li> <a> <FontAwesomeIcon icon="archive"/> Products  </a> </li>
                    <li> <a> <FontAwesomeIcon icon="fire"/> Hookah  </a> </li>
                    <li> <a> <FontAwesomeIcon icon="address-card"/> Acount </a> </li>
                    <li> <a> <FontAwesomeIcon icon="user-circle"/> login </a> </li>
                </ul>
            </nav>
        </div>
    );
} export default navbar;