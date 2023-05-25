import axios from "axios";
import { notification } from "antd";

export const apiBase = "http://localhost:3333";

export const apiClient = axios.create({
	baseURL: apiBase,
	responseType: "json",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export const setupInterceptor = () => {
	const localToken = localStorage.getItem("auth_token");
	apiClient.interceptors.request.use(
		(request) => {
			if (localToken) {
				request.headers["Authorization"] = `Bearer ${localToken}`;
			}
			return request;
		},
		(error) => {
			console.log("interceptor error:::", error);
			return Promise.reject(error);
		}
	);

	apiClient.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			const errorObject = error?.response?.data || {
				statusCode: 500,
				message: "Internal Server Error",
			};

			console.log("interceptor error:::", errorObject);

			if (errorObject.path === "/api/auth/me") {
				return Promise.reject(errorObject);
			}

			notification.error({
				message: "Error",
				description:
					`🙆🏻‍♂️ ${errorObject?.message}` ||
					"Rtstarter Says: Something went wrong 🤕, check back later 🥹",
			});

			return Promise.reject(errorObject);
		}
	);
};
