// Import React
import React from "react";
import ReactDOM from "react-dom/client";

// Import Redux
import { Provider } from "react-redux";
import { store } from "store/store";

// Import Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
