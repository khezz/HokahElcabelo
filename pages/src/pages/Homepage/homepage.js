import Head from '../../Components/Head'
import Navbar from '../../Components/Navbar'
import Style from './Homepage.module.css'

function Homepage(){
    return(
        <div>
            <Head title="Hookah-Home"/>
            <Navbar />
            <div className={Style.title}>
                <img src="../../midia/img/hookah-logo.jpg"/>
                <h1>Hookah El cabelo</h1>
            </div>
            <div className={Style.container}>

            </div>
        </div>
    )
} export default Homepage;