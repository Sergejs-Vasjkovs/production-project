import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t("Введите username")}
            />
            <Input type="text" className={cls.input} placeholder={t("EnterPassword")} />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                {t("Enter")}
            </Button>
        </div>
    );
};
