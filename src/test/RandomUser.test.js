import { fireEvent, render, screen } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";
jest.mock("axios");

describe("<RandomUser />", () => {
  it("loads user when clicking on the button", async () => {
    render(<RandomUser />);

    axios.get.mockResolvedValueOnce({ data: MOCK_USER_RESPONSE });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const titleElement = await screen.findByRole("heading", { level: 2 });
    expect(titleElement.textContent).toBe("Miguel Ángel Barreto");
  });
});

const MOCK_USER_RESPONSE = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Miguel Ángel", last: "Barreto" },
      location: {
        street: { number: 9308, name: "Peatonal San Marino" },
        city: "Santa María Chilapa de Díaz",
        state: "Hidalgo",
        country: "Mexico",
        postcode: 21592,
        coordinates: { latitude: "23.2064", longitude: "-149.1868" },
        timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
      },
      email: "miguelangel.barreto@example.com",
      login: {
        uuid: "b1eecc62-fa2a-42cb-803c-f72f55e1ae29",
        username: "bluepeacock958",
        password: "5050",
        salt: "8PlPkURa",
        md5: "336dbcfda64281e5e42532204ac9550d",
        sha1: "dc1c3dba32c51b35d368b60e845356bc22117456",
        sha256: "0f074e1f3b2eb89c785f3c5ae81aa92a2114c5b3586f9b50c06585121a2b2ec6",
      },
      dob: { date: "1971-10-17T10:04:02.189Z", age: 52 },
      registered: { date: "2004-11-04T15:14:24.628Z", age: 19 },
      phone: "(633) 816 9161",
      cell: "(610) 476 1923",
      id: { name: "NSS", value: "07 43 10 7751 5" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/97.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg",
      },
      nat: "MX",
    },
  ],
  info: { seed: "2c9fdc95d7ac3289", results: 1, page: 1, version: "1.4" },
};
