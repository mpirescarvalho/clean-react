import { Authentication, AuthenticationParams } from "@/domain/usecases";
import { AccountModel } from "@/domain/models";
import { mockAccountModel } from "@/domain/test";

export class AuthenticationSpy implements Authentication {
	account = mockAccountModel();
	params: AuthenticationParams;

	async auth(params: AuthenticationParams): Promise<AccountModel | undefined> {
		this.params = params;
		return Promise.resolve(this.account);
	}
}
