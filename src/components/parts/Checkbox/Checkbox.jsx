import checkMark from "../../../assets/img/checkmark.svg";
import classes from "./Checkbox.module.css";
import cn from "classnames";
const Checkbox = ({ updateCheck, isCompleted }) => {
  const { check, completed } = classes;
  return (
    <span
      onClick={updateCheck}
      className={cn(check, {
        [completed]: isCompleted,
      })}
    >
      {isCompleted && <img src={checkMark} />}
    </span>
  );
};

export default Checkbox;
