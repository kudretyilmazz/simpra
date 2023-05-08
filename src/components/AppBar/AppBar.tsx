// Import Store
import { useAppSelector, useAppDispatch } from "store/hooks";
import {
	getGameCount,
	getNumberOfApples,
	setNumberOfApples,
	getAutoCollect,
	setAutoCollect,
} from "store/reducers/statusReducer";

// Import Assets
import "assets/styles/appbar.scss";

function AppBar() {
	// Variables
	const dispatch = useAppDispatch();
	const gameCount = useAppSelector(state => getGameCount(state));
	const autoCollect = useAppSelector(state => getAutoCollect(state));
	const numberOfApples = useAppSelector(state => getNumberOfApples(state));

	return (
		<div className="appbar" data-testid="appbar">
			<div className="game-count" data-testid="gamecount">
				Plays: {gameCount}
			</div>
			<div className="auto-collect">
				Auto Collect:
				<input
					type="checkbox"
					checked={autoCollect}
					onChange={e => dispatch(setAutoCollect(e?.target?.checked))}
				/>
			</div>
			<div className="apple-number">
				Numbers Of Apple:
				<input
					type="number"
					value={numberOfApples}
					onChange={e => dispatch(setNumberOfApples(+e?.target?.value))}
				/>
			</div>
		</div>
	);
}

export default AppBar;
