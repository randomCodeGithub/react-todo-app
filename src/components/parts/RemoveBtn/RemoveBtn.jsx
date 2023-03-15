import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import classes from "./RemoveBtn.module.css";

const RemoveBtn = ({ remove }) => {
  return (
    <div className={classes.btnWrapper}>
      <button onClick={remove}>{<FontAwesomeIcon icon={faTrashAlt} />}</button>
    </div>
  );
};

export default RemoveBtn;