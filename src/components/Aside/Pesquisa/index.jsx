import "./scss/style.scss";

import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { useState } from "react";
const Pesquisa = (props) => {
  const [info, setInfo] = useState("");

  const Submit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={Submit} className="filter">
      <div className="input">
        <label htmlFor="search">
          <AiOutlineSearch className="filterIcon" />
        </label>
        <input
          required
          placeholder="Criar Contato"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          className="filterInput"
          id="search"
          type="text"
        />
      </div>
     
    </form>
  );
};
export default Pesquisa;
