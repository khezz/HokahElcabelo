import Style from '../styles/title.module.css'

export default function titleindex(){
    return(
        <div className={Style.title}>
            <div className={Style.logo} />
            <h1>Hookah El cabelo</h1>
            <div className={Style.container}></div>
        </div>
    );
}