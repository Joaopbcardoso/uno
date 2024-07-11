import { Link } from "react-router-dom"
export default function Header(){
    return(
        
        <header>
            <div className="logoUno">
            <img src="https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png" alt="" />
            </div>
            <div className="titulo">UNO</div>
            <ul>
                <li> <Link   to={`/sobre`}>Sobre</Link></li>
                <li> <Link   to={`/regras`}>Regras</Link></li>
                <li> <Link   to={`/como-jogar`}>Como Jogar</Link></li>
            </ul>
        </header>
    )
}