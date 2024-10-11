import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";
import { DeepPartial } from "app/types/global";

describe("getLoginIsLoading.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
                username: "",
                password: "",
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
