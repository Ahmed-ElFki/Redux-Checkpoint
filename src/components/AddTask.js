import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addNewItem, filterItem } from "../actions/actions";
import { useSelector } from "react-redux";

const AddTask = ({ filter, handleFilter }) => {
	const dispatch = useDispatch();
	const task = useRef();
	const tasksList = useSelector((state) => state);
	return (
		<div className='todo-add-form'>
			<input
				ref={task}
				type='text'
				placeholder='Add task'
				className='todo-task'
			/>
			<input
				type='submit'
				value='Submit'
				className='todo-task-submit'
				onClick={() => {
					if (task.current.value.length > 0) {
						dispatch(
							addNewItem({
								id: tasksList.length + 1,
								task: task.current.value,
								isDone: false,
							})
						);
						task.current.value = "";
					}
				}}
			/>
			<button onClick={handleFilter}>
				{filter ? "Every Item" : "Every not Done"}
			</button>
		</div>
	);
};

export default AddTask;
