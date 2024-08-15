import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import AboutPageAsync from "./Pages/AboutPage/AboutPage.Async";
import MainPageAsync from "./Pages/MainPage/MainPage.Async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", { hovered: true }, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={"/"}>Main Page</Link>
            <Link to={"/about"}>About Page</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
