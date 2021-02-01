import Link from 'next/link';
import Style from '../styles/login.module.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function login(){
    return(
        <div className={Style.container}>
            <form>
                <div className={Style.inputIcon}>
                    <i> <FontAwesomeIcon icon ="envelope"/> </i>
                    <input placeholder="E-mail" id="inputEmailLogin" type="email"/>
                </div>
                <div className={Style.inputIcon}>
                    <i> <FontAwesomeIcon icon ="key"/> </i>
                    <input placeholder="Password" id="inputPasswordLogin" type="password"/>
                </div>
                <button className={Style.button} type ="subimit">
                    Log In
                    <i> <FontAwesomeIcon icon="arrow-circle-right"/> </i>
                    <Link href="/produtos">
                        <a></a>
                    </Link>
                </button>
                <h3 className={Style.register}>Not registered yet? <Link href="./register"><a>Register!</a></Link></h3>
            </form>
        </div>
    );
}export default login;