import Head from '../Components/Head'
import Navbar from '../Components/Navbar'
import Produto from '../Components/produto'
import Style from '../styles/HomePage.module.css'


function Homepage(){
    return(
        <div>
            <Head title="Hookah-Home"/>
            <Navbar />
            <div className={Style.title}>
                <img src="../../pages/midia/img/hookah=logo.jpg" /> 
                <h1>Hookah El cabelo</h1>
            </div>
            <div className={Style.container}>
                <Produto
                    image = "../midia/img/essencia.jpg"
                    nome = "Essencia Zig"
                    preco = "12,50"
                />
                <Produto
                    image = "../midia/img/essencia.jpg"
                    nome = "Essencia Zig"
                    preco = "12,50"
                />
                
                <Produto
                    image = "../midia/img/essencia.jpg"
                    nome = "Essencia Zig"
                    preco = "12,50"
                />
                
                <Produto
                    image = "../midia/img/essencia.jpg"
                    nome = "Essencia Zig"
                    preco = "12,50"
                />
                
                <Produto
                    image = "../midia/img/essencia.jpg"
                    nome = "Essencia Zig"
                    preco = "12,50"
                />
                
                
            </div>
        </div>
    )
} export default Homepage;