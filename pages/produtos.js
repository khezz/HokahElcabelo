import Head from '../Components/Head'
import Navbar from '../Components/Navbar'
import TitleIndex from '../Components/title'
import Produto from '../Components/produto'
import Footer from '../Components/footer'
import Style from '../styles/produtos.module.css'


function Homepage(){
    return(
        <div>
            <Head title="Hookah-Home"/>
            <Navbar />
            <TitleIndex />
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