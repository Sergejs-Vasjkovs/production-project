import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}>
                {t("Enter")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi
                consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt
                totam.",
            </Modal>
        </div>
    );
};
