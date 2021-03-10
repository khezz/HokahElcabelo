import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Style from '../styles/btnfloat.module.css'
import Link from 'next/link'
import React from 'react';

library.add(fas);


export default function btnFloat() {
    return (
        <div>
            <button className={Style.btnfloat} id="btnfloat">
                <FontAwesomeIcon icon="align-justify"/>
            </button>

            <nav className={Style.opcoes} id="navbar">
                <ul>
                    <li> 
                        {/* <Link href="#">  */}
                            <a>modulos</a>
                        {/* </Link> */}
                    </li>
                    <li> 
                        {/* <Link href="#">  */}
                            <a>Instrutores</a>
                        {/* </Link> */}
                    </li>
                    <li> 
                        {/* <Link href="#">  */}
                            <a>endereços</a>
                        {/* </Link> */}
                    </li>
                </ul>
            </nav>

        </div>
    );
}
