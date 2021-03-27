import Task from "./Task";

const TaskList = ({ tasks }) => {
	return (
		<div>
			{tasks.map((todo) => (
				<Task todo={todo} />
			))}
		</div>
	);
};

export default TaskList;
