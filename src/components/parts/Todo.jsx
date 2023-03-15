import RemoveBtn from "./RemoveBtn/RemoveBtn";
import Checkbox from "./Checkbox/Checkbox";
import classes from "./Todo.module.css";
import cn from "classnames";
const Todo = ({ id, isCompleted, text, setCheck, removeTodo }) => {
  const updateCheck = () => {
    const checkValue = isCompleted ? false : true;
    setCheck(id, checkValue);
  };
  const remove = () => {
    removeTodo(id);
  };
  return (
    <li>
      <Checkbox updateCheck={updateCheck} isCompleted={isCompleted} />
      <span
        onClick={updateCheck}
        className={cn(classes.text, {
          [classes.completed]: isCompleted,
        })}
      >
        {text}
      </span>
      <RemoveBtn remove={remove} />
    </li>
  );
};

export default Todo;
