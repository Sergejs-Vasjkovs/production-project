import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
// import { useTranslation } from "react-i18next";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    // const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Something went wrong!!!</p>
            <button onClick={() => location.reload()}>Refresh the page</button>
        </div>
    );
};
