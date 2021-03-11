import Head from '../Components/Head'
import StyleIndex from '../styles/index.module.css'
import Style from '../styles/link.module.css'
import Footer from '../Components/footer'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Title from '../Components/title'
import Link from 'next/link'

library.add(fas);

export default function Links(){
    return(
        <div>
            <Head title="Links Downloads"/>
            <Title/>
            <div className={StyleIndex.content}>
                <div className={StyleIndex.divcontent}>
                    <h2>Legislação</h2>
                    <ul className={Style.content}>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Aula 01 - Download do material
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-down"/>
                            </i>
                        </a>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
}