import Style from '../styles/title.module.css'

export default function titleindex({position}){
    return(
        <div className={Style.title} style = {
            position = {position}
        }>
            <div className={Style.logo} />
            <h1>Hookah El cabelo</h1>
        </div>
    );
}