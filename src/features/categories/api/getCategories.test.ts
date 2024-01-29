import api from "@/shared/api/api";

import { getCategories } from "./getCategories";

jest.mock("@/shared/api/api");
const mockedApi = api as jest.Mocked<typeof api>;
describe("getCategories", () => {
    test("should fetch categories", async () => {
        const categories = [{
            _id: "65aee9edd994f62aafc45eb1",
            title: "Комплектующие для ПК",
            originTitle: "komplektuyushie-dly-pk",
            urlImg: "",
            subcategories: [
                {
                    title: "Материнская плата",
                    originTitle: "materinskie-plati",
                    urlImg: ""
                },
                {
                    title: "Материнская плата",
                    originTitle: "materinskie-plati",
                    urlImg: ""
                },
            ]
        }];
        const resp = { data: categories };
        mockedApi.get.mockResolvedValue(resp);
        const result = await getCategories();
        expect(mockedApi.get).toHaveBeenCalledWith("/categories");
        expect(result).toEqual(categories);
    });
    test("should returns undefined if  it is a error", async () => {
        const errorMessage = "error";
        mockedApi.get.mockRejectedValueOnce(new Error(errorMessage));
        const result = await getCategories();
        expect(mockedApi.get).toHaveBeenCalledWith("/categories");
        expect(result).toBeUndefined();
    });
});