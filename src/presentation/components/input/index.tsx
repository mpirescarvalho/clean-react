import React, { useContext } from "react";

import Context from "@/presentation/contexts/form/form-context";

import Styles from "./styles.scss";

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

const Footer: React.FC<InputProps> = (props) => {
	const { errorState } = useContext(Context);
	const error = errorState[props.name!];

	const getStatus = (): string => {
		return "🔴";
	};

	const getTitle = (): string => {
		return error;
	};

	return (
		<div className={Styles.inputWrap}>
			<input {...props} />
			<span
				data-testid={`${props.name}-status`}
				title={getTitle()}
				className={Styles.status}
			>
				{getStatus()}
			</span>
		</div>
	);
};

export default Footer;
