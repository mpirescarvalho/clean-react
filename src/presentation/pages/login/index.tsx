import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
	LoginHeader,
	Footer,
	Input,
	FormStatus,
} from "@/presentation/components";
import { Validation } from "@/presentation/protocols/validation";
import Context from "@/presentation/contexts/form/form-context";
import { Authentication } from "@/domain/usecases";

import Styles from "./styles.scss";

type LoginProps = {
	validation: Validation;
	authentication: Authentication;
};

type LoginState = {
	isLoading: boolean;
	email: string;
	password: string;
	emailError: string | null;
	passwordError: string | null;
	mainError: string;
};

const Login: React.FC<LoginProps> = ({ validation, authentication }) => {
	const [state, setState] = useState<LoginState>({
		isLoading: false,
		email: "",
		password: "",
		emailError: "",
		passwordError: "",
		mainError: "",
	});

	const history = useHistory();

	useEffect(() => {
		setState({
			...state,
			emailError: validation.validate("email", state.email),
			passwordError: validation.validate("password", state.password),
		});
	}, [state.email, state.password]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			if (state.isLoading || state.emailError || state.passwordError) {
				return;
			}
			setState({ ...state, isLoading: true });
			const account = await authentication.auth({
				email: state.email,
				password: state.password,
			});
			localStorage.setItem("accessToken", account!.accessToken);
			history.replace("/");
		} catch (error) {
			setState({
				...state,
				isLoading: false,
				mainError: error.message,
			});
		}
	};

	return (
		<div className={Styles.login}>
			<LoginHeader />

			<Context.Provider value={{ state, setState }}>
				<form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
					<h2>Login</h2>

					<Input type="email" name="email" placeholder="Digite seu e-mail" />
					<Input type="password" name="password" placeholder="Digite sua senha" />

					<button
						data-testid="submit"
						disabled={!!state.emailError || !!state.passwordError}
						className={Styles.submit}
						type="submit"
					>
						Entrar
					</button>
					<Link data-testid="signup" to="/signup" className={Styles.link}>
						Criar conta
					</Link>

					<FormStatus />
				</form>
			</Context.Provider>

			<Footer />
		</div>
	);
};

export default Login;
