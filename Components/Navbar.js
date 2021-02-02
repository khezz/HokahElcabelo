import Style from '../styles/Navbar.module.css';
import Link from 'next/link'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function navbar(){
    return(
        <div>
            <nav className={Style.container}>
                <ul>
                    <li> 
                        <Link href="/../location"> 
                            <a> 
                                <FontAwesomeIcon icon="map-marker"/> 
                                locality  
                            </a>
                        </Link>
                    </li>
                    <li> 
                        <Link href="/../produtos"> 
                            <a> 
                                <FontAwesomeIcon icon="archive"/> 
                                Products  
                            </a> 
                        </Link>
                    </li>
                    <li> 
                        {/* <Link href="#">  */}
                            <a> 
                                <FontAwesomeIcon icon="fire"/> 
                                Hookah  
                            </a> 
                        {/* </Link> */}
                    </li>
                    <li> 
                        {/* <Link href="#">  */}
                            <a> 
                                <FontAwesomeIcon icon="shopping-cart"/> 
                                Cart 
                            </a> 
                        {/* </Link> */}
                    </li>
                    <li> 
                        <Link href="/../"> 
                            <a> 
                                <FontAwesomeIcon icon="user-circle"/> 
                                login 
                            </a> 
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
} export default navbar;