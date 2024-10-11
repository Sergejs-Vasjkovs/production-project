import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./ProfileCard.module.scss";
import { getProfileIsLoading } from "entities/Profile/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/selectors/getProfileError/getProfileError";
import { getProfileData } from "entities/Profile/selectors/getProfileData/getProfileData";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("Profile")} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t("Edit")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t("Name")} className={cls.input} />
                <Input value={data?.lastname} placeholder={t("Surname")} className={cls.input} />
            </div>
        </div>
    );
};
