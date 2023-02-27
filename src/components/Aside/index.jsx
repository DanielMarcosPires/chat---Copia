import "./scss/style.scss";

import { BiMessageAltDetail, BiCheckDouble } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle, FaReact, FaBellSlash } from "react-icons/fa";

import Pesquisa from "./Pesquisa";
import Contato from "./Contato";
import { useState } from "react";
import CardUpdate from "./CardUpdate";

import avata1 from './img/avatar1.png'
import avata2 from './img/avatar2.png'
import avata3 from './img/avatar3.png'

const Aside = () => {

 const usuarios = [
  {
    perfil:avata1,
    nome:'Sabrina Matos',
    texto:`Oi,Tudo bem?`,
    hora:'22:40'
  },
  {
    perfil:avata2,
    nome:'João Augusto',
    texto:`Está disponível`,
    hora:'12:30'
  },
  {
    perfil:avata3,
    nome:'Maria Silva',
    texto:`O projeto ficou perfeito, obrigada!`,
    hora:'08:20'
  },
 ]
  
  return (
    <aside className="aside">
      <header className="asideHeader">
        <div className="asideHeaderMargin">
          <img className="PerfilIcone" src={avata1} alt="" />

          <nav className="asideHeaderNav">
            <a href="#3">
              <FaReact className="asideHeaderIcons" />
            </a>
            <div className="controle">
                <BiMessageAltDetail className="asideHeaderIcons" />
            </div>
            <a href="#3">
              <BsThreeDotsVertical className="asideHeaderIcons" />
            </a>
          </nav>
        </div>
      </header>
      <CardUpdate icone={FaBellSlash} />
      <main className="asideContent">
        <Pesquisa/>
        <section>
         {usuarios.map(usuarios => <Contato
         perfil={usuarios.perfil}
         nome={usuarios.nome}
         texto={usuarios.texto}
         hora={usuarios.hora}
         />)}
        </section>
      </main>
    </aside>
  );
};
export default Aside;
