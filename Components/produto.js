import Style from '../styles/produto.module.css';
import Image from 'next/image'
import Link from 'next/link'


function produto({image,nome, preco}){
    return(
        <div className={Style.container}>
            <Image
                src = {image}
                width = {230}
                height = {220}
                layout = "responsive"
                quality = {25}
            />

            <h3> {nome} </h3>
            <p>R$ {preco} </p> 
            <div className={Style.buttonAddCart}>
                <Link href="#">
                    <a>add ao carinho</a>
                </Link>
            </div>
        </div>
    );
}export default produto;