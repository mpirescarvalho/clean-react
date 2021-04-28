import { Validation } from "@/presentation/protocols";

export class ValidationStub implements Validation {
	errorMessage: string | null;

	validate(fieldName: string, fieldValue: string): string | null {
		return this.errorMessage;
	}
}
