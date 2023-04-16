// Import React
import { useMemo, CSSProperties } from "react";

// Import Store
import { useAppSelector } from "store/hooks";
import { getStatus, getGameCount } from "store/reducers/statusReducer";

// Import Constants
import { STATUS } from "constants/status";

// Import Assets
import apple from "assets/images/apple.svg";
import "assets/styles/apple.scss";

function Apple() {
	// Variables
	const gameCount = useAppSelector(state => getGameCount(state));
	const status = useAppSelector(state => getStatus(state));
	const transitionDelay = `${Math.random() * 1 + 1}s`; // Uniqe Transition Delay (fall time after starting to shaking)

	// Generate Start Apple Positions
	const appleStartPosition = useMemo(() => {
		// Recursive Position Calculator
		const positionCalculator = (): CSSProperties => {
			let left = Math.floor(Math.random() * 500 + 1);
			let top = Math.floor(Math.random() * 400 + 1);

			if (top > 150 && left > 80) {
				return { left, top };
			}
			return positionCalculator();
		};

		return positionCalculator();
	}, [gameCount]);

	// Generate Collect Position
	const appleCollectPosition = useMemo(() => {
		let left = 710 + Math.floor(Math.random() * 110 + 1);
		let bottom = 20 + Math.floor(Math.random() * 100 + 1);

		return { left, bottom };
	}, [gameCount]);

	return (
		<img
			src={apple}
			alt="red-apple"
			style={
				status === STATUS.COLLECT
					? appleCollectPosition
					: {
							...appleStartPosition,
							transitionDelay: status === STATUS.DROP ? transitionDelay : "initial",
					  }
			}
			className={`apple ${status}`}
		/>
	);
}

export default Apple;
