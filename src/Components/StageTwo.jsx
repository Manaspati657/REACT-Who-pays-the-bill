import { useContext } from "react";
import { MyContext } from "../Context";

const StageTwo = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h3>The looser is: </h3>
        {context.result}
      </div>
      <div onClick={() => context.resetGame()} className="action_button">
        START OVER
      </div>
      <div onClick={()=> context.getNewLooser()} className="action_button btn_2">
        GET NEW LOOSER
      </div>
    </>
  );
};

export default StageTwo;
