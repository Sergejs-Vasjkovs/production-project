import { render } from "react-dom";
import App from "./app/App";
import "./shared/config/i18n/i18n";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Theme, ThemeProvider } from "./app/providers/ThemeProvider";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider initialTheme={Theme.DARK}>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root"),
);
