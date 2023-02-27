import "./style.scss";
import "./color/style.scss";
import Content from "./components/Content";
import Aside from "./components/Aside";

function App() {
  
  return (
    <div className="grid">
      <Aside />
      <Content />
    </div>
  );
}

export default App;
