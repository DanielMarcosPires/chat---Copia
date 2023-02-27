import CaixaDeMensagem from './CaixaDeMensagem'
import Comentarios from './Comentarios'
import './scss/style.scss'

const Chat = () =>{
    return(
    <div className='Chat'>
        <Comentarios />
        <CaixaDeMensagem />
    </div>
    )
}
export default Chat