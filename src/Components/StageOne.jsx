import { useContext, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { MyContext } from "../Context";

const StageOne = () => {
  const nameInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = nameInput.current.value;
    const validate = validateInput(value);
    //run validation

    if (validate) {
      setError([false, ""]);
      //add players to list
      context.addPlayer(value);

      //reset form
      nameInput.current.value = "";
    }
  };
  const validateInput = (value) => {
    if (value.trim() === "") {
      setError([true, "Sorry, You need to add something."]);
      return false;
    } else if (value.length <= 2) {
      setError([true, "Sorry, You need 3 character at least."]);
      return false;
    }

    return true;
  };
  return (
    <>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player Name"
            ref={nameInput}
          />
          {error[0] && <Alert className="mt-2">{error[1]}</Alert>}
          <Button className="miami" variant="primary" type="submit">
            Add Player
          </Button>
          {context.players && context.players.length > 0 && (
            <>
              <hr />
              <div>
                <ul className="list-group">
                  {context.players.map((player, id) => (
                    <li
                      key={id}
                      className="list-group-item d-flex justify-content-between align-items-center list-group-item-actions"
                    >
                      {player}
                      <span
                        className="badge badge-danger"
                        onClick={() => context.removePlayer(id)}
                      >
                        X
                      </span>
                    </li>
                  ))}
                </ul>
                <div onClick={() => context.next()} className="action_button">
                  Next
                </div>
              </div>
            </>
          )}
        </Form.Group>
      </Form>
    </>
  );
};

export default StageOne;
