import Head from '../Components/Head'
import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/index.module.css'
import Footer from '../Components/footer'
import Button from '../Components/btnFloat'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Title from '../Components/title'


library.add(fas);

export default function Home() {
  return (
   <div>
      <Head title ="Arquivos de Aula"/>

      {/* <Button/> */}
      <Title/>

      <div className={Style.content}>
        <div className={Style.divcontent}>
          <h3>Welcome</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Link href ="./linkDownloads">
              <a>
                Atividades
                  <i>
                    <FontAwesomeIcon icon="arrow-right"/>
                  </i>
              </a>
            </Link>
        </div>

      </div>

      <Footer/>
   </div>
  )
}
