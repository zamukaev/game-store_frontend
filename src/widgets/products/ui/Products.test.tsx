import axios from "axios";

test("test api hits", async () => {
    const res = await axios.get(
        "https://gamestore-backend.vercel.app/api/hits"
    );
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.data)).toBe(true);
});

test("test api discounts", async () => {
    const res = await axios.get(
        "https://gamestore-backend.vercel.app/api/discounts"
    );
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.data)).toBe(true);
});
