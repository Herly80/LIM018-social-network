// importamos la funcion que vamos a testear
import { signUpRegister } from "../src/lib/index.js";
import registerView from "../src/View/register.js";

jest.mock("../src/lib/firebase.js");
// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
global.alert = () => {};

describe("testeando la funcion registerView", () => {
  beforeAll(() => {
    document.body.innerHTML = `<section class="container" id="root"></section>`;
  });

  beforeEach(() => {
    document.getElementById("root").innerHTML = registerView;
  });

  it("debe mostrar correctamente la vista registro", () => {
    expect(document.getElementById("registUser")).toBeTruthy();
  });

  it("Debe mostrar el error", () => {
    signUpRegister();
    document.getElementById("registUser").click();
  });
});
