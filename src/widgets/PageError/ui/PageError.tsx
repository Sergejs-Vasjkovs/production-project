import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t("Something went wrong!")}</p>
            <Button theme={ButtonTheme.OUTLINE} onClick={() => location.reload()}>
                {t("Refresh the page")}
            </Button>
        </div>
    );
};
