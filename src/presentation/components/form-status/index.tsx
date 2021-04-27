import React, { useContext } from "react";

import { Spinner } from "@/presentation/components";
import Context from "@/presentation/contexts/form/form-context";

import Styles from "./styles.scss";

const FormStatus: React.FC = () => {
	const {
		state: { isLoading, mainError },
	} = useContext(Context);
	return (
		<div data-testid="error-wrap" className={Styles.errorWrap}>
			{isLoading && <Spinner className={Styles.spinner} />}
			{mainError && <span className={Styles.error}>{mainError}</span>}
		</div>
	);
};

export default FormStatus;
