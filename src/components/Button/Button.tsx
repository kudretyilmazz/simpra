// Import React
import type { ButtonHTMLAttributes } from "react";

// Import Assets
import "assets/styles/button.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	name: string;
	icon?: JSX.Element;
}

function Button(props: IButton) {
	// Props Destruct
	const { label, name, icon } = props;

	return (
		<button {...props} id={name} className="button">
			{icon && (
				<div className="icon" role="document">
					{icon}
				</div>
			)}
			{label}
		</button>
	);
}

export default Button;
