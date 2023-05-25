import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { setupInterceptor } from "./common/api";
import "./index.scss";

setupInterceptor();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<BrowserRouter>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#34a853",
					},
				}}
			>
				<App />
			</ConfigProvider>
		</BrowserRouter>
	</StrictMode>
);
