/* eslint-disable max-len */
import api from "@/shared/api/api";

import { getProductsBySubcategory } from "./getProductsBySubcategory";

jest.mock("@/shared/api/api");
const mockedApi = api as jest.Mocked<typeof api>;
describe("getCategories", () => {
    test("should fetch products", async () => {
        const products = [{
            _id: "658322d9c2c5d08077d90dec",
            title: "Телевизор LED Aceline 24HEN1 черный",
            desc: "4x100 Мбит/с, 4 (802.11n), Wi-Fi 250 Мбит/с",
            characteristic: "Создание беспроводной сети Беспроводной маршрутизатор DIR-300/NRU Wireless 150 (до 150 Мбит/с) позволяет создать беспроводную сеть для дома. Подключив беспроводной маршрутизатор к выделенной линии или широкополосному модему, пользователи могут совместно использовать высокоскоростное соединение с Интернет для поиска информации в Web, проверки электронной почты и общения on-line с друзьями и семьей.",
            category: "Wi-Fi роутеры",
            price: 110000,
            oldPrice: 4564,
            hit: true,
            urlImages: [
                "https://c.dns-shop.ru/thumb/st4/fit/500/500/de2495f36beae7c1af70d63039dd7ce0/10ac2c59e0f810145701cba1181e9a7798a2a283af00749d407a920c664a2db7.jpg"
            ],
            discount: true,
            inStock: true,
            __v: 6,
            reviews: [
                {
                    id: "1f2ad978-25e7-4c79-af96-289eac949fa7",
                    userId: "658492469c3dae6dcdedcff1",
                    star: 2,
                    comment: {
                        advantages: "Хорошая цена",
                        flaws: "Большой размер",
                        comment: "В целом за такую цену - ок!"
                    },
                    experience: "month"
                }
            ],
            originTitle: "komplektuyushie-dly-pk"
        }];
        const resp = { data: products };
        mockedApi.get.mockResolvedValue(resp);
        const result = await getProductsBySubcategory("komplektuyushie-dly-pk");
        expect(mockedApi.get).toHaveBeenCalledWith("/getProductsBySubcategory/?komplektuyushie-dly-pk");
        expect(result).toEqual(products);
    });
    test("should returns undefined if  it is a error", async () => {
        const errorMessage = "error";
        mockedApi.get.mockRejectedValueOnce(new Error(errorMessage));
        const result = await getProductsBySubcategory("komplektuyushie-dly-pk");
        expect(mockedApi.get).toHaveBeenCalledWith("/getProductsBySubcategory/?komplektuyushie-dly-pk");
        expect(result).toBeUndefined();
    });
});