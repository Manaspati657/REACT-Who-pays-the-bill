import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";
import { useContext } from "react";
import { MyContext } from "./Context";
import StageOne from "./Components/StageOne";
import StageTwo from "./Components/StageTwo";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who pays the bill ?</h1>
          {context.stage == 1 ? <StageOne /> : <StageTwo />}
        </div>
      </div>
    </>
  );
};

export default App;
