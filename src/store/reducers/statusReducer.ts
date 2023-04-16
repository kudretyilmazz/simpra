// Import Redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Import Type
import { STATUS } from "constants/status";

// State Type
interface IAppStatus {
	gameCount: number; // Gameplay Count
	autoCollect: boolean; // Automatic Collection Preference
	status: STATUS; // Game Status
	numberOfApples: number; // Number of apples on the tree
}

// Initial State
const initialState: IAppStatus = {
	gameCount: 1,
	autoCollect: true,
	status: STATUS.START,
	numberOfApples: 20,
};

export const appStatus = createSlice({
	name: "appStatus",
	initialState,
	reducers: {
		setStatus: (state, action: PayloadAction<STATUS>) => {
			state.status = action.payload;
		},
		setAutoCollect: (state, action: PayloadAction<boolean>) => {
			state.autoCollect = action.payload;
		},
		setNumberOfApples: (state, action: PayloadAction<number>) => {
			state.numberOfApples = action.payload;
		},
		restartGame: state => {
			state.gameCount += 1;
			state.status = STATUS.START;
		},
	},
});

export const { setStatus, setNumberOfApples, setAutoCollect, restartGame } = appStatus.actions;

export const getStatus = (state: RootState) => state.appStatus.status;
export const getGameCount = (state: RootState) => state.appStatus.gameCount;
export const getNumberOfApples = (state: RootState) => state.appStatus.numberOfApples;
export const getAutoCollect = (state: RootState) => state.appStatus.autoCollect;

export default appStatus.reducer;
