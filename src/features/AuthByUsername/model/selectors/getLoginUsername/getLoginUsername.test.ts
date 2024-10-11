import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";
import { DeepPartial } from "app/types/global";

describe("getLoginUsername.test", () => {
    test("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "test",
                password: "",
                isLoading: true,
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual("test");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
