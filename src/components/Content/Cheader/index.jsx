import './scss/style.scss'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiPaperclip} from 'react-icons/fi'
import {BsThreeDotsVertical} from 'react-icons/bs'
import perfil from './img/avatar1.png'
function Cheader() {
    return(
    <header className='ContentHeader'>
        <div className='ContentHeaderMargin'>
           <img src={perfil} alt="" />
            <div className='ContentHeaderIcons'>
                <i className='ContentHeaderIcon'><AiOutlineSearch /></i>
                <i className='ContentHeaderIcon'><FiPaperclip/></i>
                <i className='ContentHeaderIcon'><BsThreeDotsVertical/></i>
            </div>
        </div>
    </header>
    )
}
export default Cheader