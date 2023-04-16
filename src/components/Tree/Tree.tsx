// Import Store
import { useAppSelector } from "store/hooks";
import { getStatus } from "store/reducers/statusReducer";

// Import Constants
import { STATUS } from "constants/status";

// Import Assets
import TreeImage from "assets/images/tree.svg";
import "assets/styles/tree.scss";

function Tree() {
	// Variables
	const status = useAppSelector(state => getStatus(state));

	return (
		<div className={`tree ${status === STATUS.DROP ? "drop" : ""}`}>
			<img src={TreeImage} alt="Tree" />
		</div>
	);
}

export default Tree;
