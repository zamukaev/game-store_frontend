import api from "@/shared/api/api";

import { getCategoryByTitle } from "./getCategoryByTitle";

jest.mock("@/shared/api/api");
const mockedApi = api as jest.Mocked<typeof api>;
describe("getCategories", () => {
    test("should fetch categories", async () => {
        const category = {
            _id: "65aee9edd994f62aafc45eb1",
            title: "Комплектующие для ПК",
            originTitle: "komplektuyushie-dly-pk",
            urlImg: "",
            subcategories: [
                {
                    title: "Материнская плата",
                    originTitle: "materinskie-plati",
                    urlImg: "",
                },
                {
                    title: "Материнская плата",
                    originTitle: "materinskie-plati",
                    urlImg: "",
                },
            ],
        };
        const resp = { data: category };
        mockedApi.get.mockResolvedValue(resp);
        const result = await getCategoryByTitle(category.originTitle);
        expect(mockedApi.get).toHaveBeenCalledWith(
            "/category/komplektuyushie-dly-pk"
        );
        expect(result).toEqual(category);
    });
    test("should returns undefined if  it is a error", async () => {
        const errorMessage = "error";
        mockedApi.get.mockRejectedValueOnce(new Error(errorMessage));
        const result = await getCategoryByTitle("komplektuyushie-dly-pk");
        expect(mockedApi.get).toHaveBeenCalledWith(
            "/category/komplektuyushie-dly-pk"
        );
        expect(result).toBeUndefined();
    });
});
