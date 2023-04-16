// Import React
import { useState, useEffect } from "react";

// Import Store
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
	getStatus,
	setStatus,
	getNumberOfApples,
	getAutoCollect,
	restartGame,
} from "store/reducers/statusReducer";

// Import Constants
import { STATUS } from "constants/status";

// Import Components
import Tree from "components/Tree/Tree";
import Button from "components/Button/Button";
import Basket from "components/Basket/Basket";
import Apple from "components/Apple/Apple";
import AppBar from "components/AppBar/AppBar";
import ShakeIcon from "components/icons/ShakeIcon";
import CollectIcon from "components/icons/CollectIcon";
import RestartIcon from "components/icons/RestartIcon";

// Import Assets
import "assets/styles/reset.scss";
import "assets/styles/app.scss";

function App() {
	// useStates
	const [applesArray, setApplesArray] = useState<number[]>([]);
	const [isCollectBtnActive, setIsCollectBtnActive] = useState(false);

	// Variables
	const autoCollect = useAppSelector(state => getAutoCollect(state));
	const numberOfApples = useAppSelector(state => getNumberOfApples(state));
	const status = useAppSelector(state => getStatus(state));
	const dispatch = useAppDispatch();

	// Actions
	const shake = () => {
		dispatch(setStatus(STATUS.DROP));

		// Auto Collecting
		if (autoCollect) {
			setTimeout(() => dispatch(setStatus(STATUS.COLLECT)), 4000);
			return;
		}

		setTimeout(() => setIsCollectBtnActive(true), 3000);
	};

	const collect = () => {
		dispatch(setStatus(STATUS.COLLECT));
		setIsCollectBtnActive(false);
	};

	const restart = () => dispatch(restartGame());

	// useEffect
	useEffect(() => {
		const countArray: number[] = [];

		// Create as many apples as number Of Apples
		for (let i = 1; i < numberOfApples + 1; i++) {
			countArray?.push(i);
		}
		setApplesArray(countArray);
	}, [numberOfApples]);

	return (
		<div className="app">
			{/* APPBAR */}
			<AppBar />

			{/* GAME */}
			<div className="game">
				{/* APPLE TREE & BASKET */}
				<div className="game-area">
					<Tree />
					{applesArray?.map(key => (
						<Apple key={key} />
					))}
					<Basket />
				</div>

				{/* CONTROL BUTTONS */}
				<div className="controls">
					<Button
						label="Shake"
						name="shake_cta"
						icon={<ShakeIcon />}
						onClick={shake}
						disabled={status !== STATUS.START}
					/>
					{!autoCollect && (
						<Button
							label="Collect"
							name="collect_cta"
							icon={<CollectIcon />}
							onClick={collect}
							disabled={!isCollectBtnActive}
						/>
					)}
					<Button
						label="Restart"
						name="restart_cta"
						icon={<RestartIcon />}
						onClick={restart}
						disabled={status !== STATUS.COLLECT}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
