import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/ThemeProvider/router";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", { hovered: true }, [theme])}>
            <Suspense fallback="loading">
                <NavBar />

                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
