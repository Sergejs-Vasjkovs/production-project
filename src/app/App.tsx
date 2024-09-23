import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/ThemeProvider/router";
import { NavBar } from "widgets/NavBar";

import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";
import { PageLoader } from "widgets/PageLoader/PageLoader";

const App = () => {
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback={<PageLoader />}>
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
