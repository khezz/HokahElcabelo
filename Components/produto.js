import Style from './Styles/produto.module.css'
function produto({image,nome, preco}){
    return(
        <div className={Style.container}>
            <img src={image}/>
            <h3> {nome} </h3>
            <p>R$ {preco} </p>
            <div className={Style.buttonAddCart}>
                <a>add ao carinho</a>
            </div>
        </div>
    );
}export default produto;