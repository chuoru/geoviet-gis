
const ID_REQUIRED = 'Username or Email is required!';
const PWD_REQUIRED = 'Password is required!';


export default {
	name: "LoginScreen",
	data() {
		return {
			validState: undefined,
			usernameMetaData: {
				username: undefined,
				validState: undefined,
				invalidFeedback: ID_REQUIRED,
			},
			passwordMetaData: {
				password: undefined,
				validState: undefined,
				invalidFeedback: PWD_REQUIRED,
			},
			returnUrl: ''
		}
	},
	methods: {
		async onSignInButtonClick() {
			const isValid = this.$refs.login.checkValidity();
			this.validState = isValid;
			if (!this.validState) return;
			this.$router.push("/home")
		}
	},
	created () {
		// get return url from route parameters or default to '/'
		this.returnUrl = this.$router.query.returnUrl || '';
	}
}