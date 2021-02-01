import Head from '../Components/Head'
import Navbar from '../Components/Navbar'
import Produto from '../Components/produto'
import Footer from '../Components/footer'
import Style from '../styles/produtos.module.css'


function Homepage(){
    return(
        <div>
            <Head title="Hookah-Home"/>
            <Navbar />
            <div className={Style.title}>
                <div className={Style.logo}></div>
                <h1>Hookah El cabelo</h1>
            </div>
            <div className={Style.container}>
                <Produto
                    image = "/../public/img/essencia.jpg"
                    nome = "Essencia Zig"
                    preco = "12,50"
                />
            </div>
            <Footer/>
        </div>
    )
} export default Homepage;