import { useContext } from "react";
import PropTypes from "prop-types";

import Input from "../../atoms/Input/Input";
import Result from "../../atoms/Result/Result";
import "./styles.scss";
import { CalculatorContext } from "../../../context/CalculatorProvider";

const namespace = "board, center";

const Board = () => {
  const { state } = useContext(CalculatorContext);
  console.log(state);
  return (
    <section className={namespace}>
      <div>
        <Input className="form-control" value={state.board} readOnly={true} />
        <br />
        <Result text={state.result} />
      </div>
      <br />
    </section>
  );
};

Board.propTypes = {
  operations: PropTypes.string,
};

export default Board;
