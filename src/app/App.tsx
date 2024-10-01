import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/ThemeProvider/router";
import { NavBar } from "widgets/NavBar";

import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import { PageLoader } from "widgets/PageLoader/PageLoader";
import { userActions } from "entities/User";
import { useAppDispatch } from "../shared/lib/hooks/useAppDispatch/useAppDispatch";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
