import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./css/App.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
	const tasks = useSelector((state) => state);
	const [filter, setFilter] = useState(false);
	const handleFilter = () => {
		setFilter(!filter);
	};

	return (
		<div className='App'>
			<AddTask filter={filter} handleFilter={handleFilter} />
			<TaskList
				tasks={
					filter
						? tasks.filter((currentTask) => currentTask.isDone == true)
						: tasks
				}
			/>
		</div>
	);
};

export default App;
