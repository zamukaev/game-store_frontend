import axios from "axios";
// Mocken von Axios
jest.mock("axios");
const mockedAxios = jest.mocked(axios);
// Mocken der API-Daten
const mockData = {
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

describe("getCategoryByTitle", () => {
    test("holt erfolgreich Daten von der API", async () => {});

    test("handhabt Fehler beim Abrufen von Daten von der API", async () => {});
});
