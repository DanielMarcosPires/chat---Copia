import './scss/style.scss'
import Mensagem from "./Mensagem"

const Comentarios = () =>{
    return(
        <>
            <ul className='ListaDeMensagems'>
                <li className="mensagemEnviado">
                    <Mensagem />
                </li>
                <li className="mensagemEnviado">
                    <Mensagem />
                </li>
                <li className="mensagemEnviado">
                    <Mensagem />
                </li>
            </ul>
        </>
    )
}
export default Comentarios