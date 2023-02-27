import './scss/style.scss'
import {FaRegSmile} from 'react-icons/fa'
import {AiFillCaretRight} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
const CaixaDeMensagem = () =>{
    
    return(
        <footer className="CaixaDeMensagem">
            <form className="CaixaDeMensagemMargem">
                    <i className="CaixaDeMensagemIcone">
                        <FaRegSmile />
                    </i>
                    <div className="CaixaDeMensagemInput">
                        <input placeholder='Digite uma mensagem' type="text" />
                    </div>
                    <i className="CaixaDeMensagemIcone">
                        <BsFillMicFill />
                    </i>
            </form>
        </footer>
    )
}
export default CaixaDeMensagem