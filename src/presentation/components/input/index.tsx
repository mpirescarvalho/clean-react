import React from "react";

import Styles from "./styles.scss";

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

const Footer: React.FC<InputProps> = (props) => {
	return (
		<div className={Styles.inputWrap}>
			<input {...props} />
			<span className={Styles.status}>🔴</span>
		</div>
	);
};

export default Footer;
