import { MdOutlineDelete } from "react-icons/md";
import "./index.css";

const TodoItem = (props) => {
  const { todoDetails, onDeletingTodo } = props;
  const { todo, priority, status, id } = todoDetails;

  const onDelete = () => {
    onDeletingTodo(id);
  };

  return (
    <li className="table-row">
      <p className="table-cell name-column">{todo}</p>
      <hr className="separator" />
      <p className="table-cell name-column">{priority}</p>
      <hr className="separator" />
      <p className="table-cell name-column">{status}</p>
      <hr className="separator" />
      <div className="buttons-container table-cell name-column">
        <button
          className="table-cell name-column edit-button"
          type="button"
          onClick={onDelete}
        >
          <MdOutlineDelete className="edit-icon" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
