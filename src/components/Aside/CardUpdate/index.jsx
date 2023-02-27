import './scss/style.scss'
import { FaRegUserCircle, FaReact,FaBellSlash } from "react-icons/fa";

const CardUpdate = ()=>{
    return (
        <section className='CardUpdate'>
            <div class="CardUpdateMargin">
                <div className='CardUpdateIcon'>
                  <FaBellSlash />
                </div>
                <div className='CardUpdateDescription'>
                    <p className='CardUpdateText'>Receba notificações de novas mensagens</p>
                    <p className='CardUpdateText'>Ativar notificaçõesna área de trabalho &gt;</p>
                </div>
            </div>
        </section>
    )
}
export default CardUpdate