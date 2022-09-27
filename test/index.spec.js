// importamos la funcion que vamos a testear
import { signUpRegister } from "../src/lib/index.js";

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
describe("testeando la funcion signUpRegister", () => {
  it("debe mostrar correctamente la vista registro", () => {
    signUpRegister();
  });
});
