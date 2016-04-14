import {Injectable} from "angular2/core";

@Injectable()
export class LoginService {
	public login(pin: number): Promise<boolean> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (pin == 2015)
					resolve(true);
				else
					resolve(false);
			}, 1000);
		})
	}
}