import Done from "../resources/checkmark.png";
import notDone from "../resources/close.png";
import { deleteItem, editItemState } from "../actions/actions";
import { useDispatch } from "react-redux";

const Task = ({ todo }) => {
	const dispatch = useDispatch();
	return (
		<div className='display-task' id={todo.id}>
			<button onClick={() => dispatch(deleteItem(todo.id))}>Delete</button>
			<button onClick={() => dispatch(editItemState(todo.id))}>
				{todo.isDone ? "Not-Done" : "Done"}
			</button>
			<p
				style={{
					paddingLeft: "20px",
					textDecoration: todo.isDone ? "line-through" : "none",
				}}>
				{todo.task}
			</p>
			<img
				src={todo.isDone ? Done : notDone}
				alt={todo.isDone ? "is-done" : "is-not-done"}
				className='task-status'
			/>
		</div>
	);
};

export default Task;
