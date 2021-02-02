import Head from '../Components/Head'
import Navbar from '../Components/Navbar'
import TitleIndex from '../Components/title'
import Footer from '../Components/footer'
import Style from '../styles/location.module.css'
import StyleProdutos from '../styles/Produtos.module.css'



export default function Location(){
    return(
        <div>
            <Head title="Hookah Locality"/>
            <TitleIndex position = "relative"/>
            <Navbar/>

            <div className={Style.container}>
                <h1 className={Style.title}> 
                    Come to us! 
                </h1>
                <p className={Style.paragrafo}>
                    Lorem ipsum tristique suspendisse egestas et eleifend quisque curae pellentesque, 
                    tristique iaculis dictumst sed varius vehicula facilisis ultrices congue, 
                    sit praesent nibh curae duis donec etiam quisque. nostra massa volutpat blandit tristique 
                    dictum enim cubilia nullam, enim porta sed pharetra morbi rutrum vivamus scelerisque, 
                    tincidunt blandit torquent quisque ante habitant primis. aenean platea vestibulum tristique 
                    hac tempor malesuada fusce integer nibh, dolor non ad ante mauris dictumst vel facilisis non, 
                    habitasse scelerisque adipiscing sed quam nec est primis. sem sapien maecenas vehicula erat 
                    quam aenean quisque fringilla nunc amet eros ante enim, lacus consectetur aliquam aptent 
                    mattis etiam luctus ultricies rhoncus molestie in. 
                </p>

                <h2 className={Style.title}>
                    Locality
                </h2>
                <iframe className={Style.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7597634906188!2d-46.844256085615925!3d-23.720271584604173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfadf598a4025f%3A0xea04e261d31d293b!2sTabacaria%20el%20cabelo!5e0!3m2!1sen!2sbr!4v1612269153614!5m2!1sen!2sbr" 
                />
            </div>

            <Footer position="relative"/>
        </div>
    );
}