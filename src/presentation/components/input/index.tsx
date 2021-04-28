import React, { useContext } from "react";

import Context from "@/presentation/contexts/form/form-context";

import Styles from "./styles.scss";

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

const Footer: React.FC<InputProps> = (props) => {
	const { state, setState } = useContext(Context);
	const error = state[`${props.name}Error`];

	const getStatus = (): string => {
		return error ? "🔴" : "🟢";
	};

	const getTitle = (): string => {
		return error || "Tudo certo!";
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className={Styles.inputWrap}>
			<input {...props} data-testid={props.name} onChange={handleChange} />
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
