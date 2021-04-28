import React, { useState, useEffect } from "react";

import {
	LoginHeader,
	Footer,
	Input,
	FormStatus,
} from "@/presentation/components";
import { Validation } from "@/presentation/protocols/validation";
import Context from "@/presentation/contexts/form/form-context";

import Styles from "./styles.scss";

type LoginProps = {
	validation: Validation;
};

type LoginState = {
	isLoading: boolean;
	email: string;
	password: string;
	emailError: string | null;
	passwordError: string | null;
	mainError: string;
};

const Login: React.FC<LoginProps> = ({ validation }) => {
	const [state, setState] = useState<LoginState>({
		isLoading: false,
		email: "",
		password: "",
		emailError: "",
		passwordError: "",
		mainError: "",
	});

	useEffect(() => {
		setState({
			...state,
			emailError: validation.validate("email", state.email),
			passwordError: validation.validate("password", state.password),
		});
	}, [state.email, state.password]);

	return (
		<div className={Styles.login}>
			<LoginHeader />

			<Context.Provider value={{ state, setState }}>
				<form className={Styles.form}>
					<h2>Login</h2>

					<Input type="email" name="email" placeholder="Digite seu e-mail" />
					<Input type="password" name="password" placeholder="Digite sua senha" />

					<button
						data-testid="submit"
						disabled
						className={Styles.submit}
						type="submit"
					>
						Entrar
					</button>
					<span className={Styles.link}>Criar conta</span>

					<FormStatus />
				</form>
			</Context.Provider>

			<Footer />
		</div>
	);
};

export default Login;
