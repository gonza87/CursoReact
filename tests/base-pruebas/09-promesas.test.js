import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () =>{
    test('getHeroeByIdasync debe retornar un heroe', () => {

        const id = 1;
        getHeroeByIdAsync(id);

    })
})