
import Stylelogin from '../styles/login.module.css'
import TitleIndex from '../Components/title'
import Head from '../Components/Head'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

library.add(fas);

function register(){
    return(
        <div className={Stylelogin.container}>
            <Head title ="Hookah Register"/>
            <TitleIndex position = "absolute"/>
            <form action="POST">

                <div className={Stylelogin.inputIcon}>
                    <i>
                        <FontAwesomeIcon icon = "user"/>
                    </i>
                    <input Type="Text" placeholder="Login" maxLength="10"/>
                </div>

                <div className={Stylelogin.inputIcon}>
                    <i>
                        <FontAwesomeIcon icon =  "envelope"/>
                    </i>
                    <input Type="email" placeholder="E-mail"/>
                </div>

                <div className={Stylelogin.inputIcon}>
                    <i>
                        <FontAwesomeIcon icon =  "key"/>
                    </i>
                    <input Type="Password" placeholder="Password" maxLength="16"/>
                </div>

                <div className={Stylelogin.inputIcon}>
                    <i>
                        <FontAwesomeIcon icon =  "key"/>
                    </i>
                    <input Type="Password" placeholder="Confirm password" maxLength="16"/>
                </div>

                <div className={Stylelogin.inputIcon}>
                    <i>
                        <FontAwesomeIcon icon =  "map-marked-alt"/>
                    </i>
                    <input Type="text" placeholder="Address"/>
                </div>
                <div className={Stylelogin.inputIcon}>
                    <i>
                        <FontAwesomeIcon icon =  "map-pin"/>
                    </i>
                    <input Type="text" placeholder="Zip code (00000-000)"/>
                </div>

                <button type="submit" className={Stylelogin.button}>
                    Register
                    <i>
                        <FontAwesomeIcon icon="arrow-circle-right"/>
                    </i>
                </button>

                <p className={Stylelogin.register}>You from register? 
                    <Link href="/login"> 
                        <a>Log In! </a> 
                    </Link> 
                </p>

            </form>

        </div>
    );
} export default register;