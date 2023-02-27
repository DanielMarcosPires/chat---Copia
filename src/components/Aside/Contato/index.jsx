import { useCallback, useState } from "react";
import "./scss/style.scss";
import {BiCheckDouble} from 'react-icons/bi'
const Contato = ({ perfil , nome ,texto, hora }) => {
  const [contador, setContador] = useState(0);

  const binario = useCallback(() => {
    if (contador === 1) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  }, [contador, setContador]);

  const selecionado = {
    background: "var(--selecionado)",
    boxShadow: "0 0 8px var(--selecionado)",
    transition: "0.5s",
  };

  // console.log(contador);
  return (
    <section
      style={contador === 1 ? selecionado : {}}
      onClick={binario}
      className="Usuario"
    >
      <div className="UsuarioMargem">
        <i class="UsuarioMargemIcone"><img src={perfil} alt="" /></i>
        <div className="UsuarioInfo">
        <div>
          <p className="UsuarioNome">{nome}</p>
          <p className="UsuarioNome"><BiCheckDouble/>{texto}</p>
        </div>
        <p>{hora}</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
