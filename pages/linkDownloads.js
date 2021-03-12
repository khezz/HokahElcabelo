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
                <div className={Style.divcontent}>
                    <h2>Legislação</h2>
                    <ul className={Style.content}>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Primeiros Socorros
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Preveção e combate a incêndio
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Produtos Perigosos
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Libras
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Trabalho em altura
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Espaço confinado
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Cabos, voltas e nós / Comunicação
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                        <a className={Style.linkdownload} href="../public/arquivos/Legislação/aula01/Legislação.ppt" download>
                            Legislação
                            <i>
                                <FontAwesomeIcon icon="arrow-circle-rigth"/>
                            </i>
                        </a>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
}