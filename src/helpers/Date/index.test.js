import { getMonth } from "./index";

describe("Date helper", () => {                        

    describe("When getMonth is called", () => {       

        it("the function return janvier for 2022-01-01 as date", () => {  
            const date = new Date("2022-01-01");
            const resultat = getMonth(date);
            expect(resultat).toBe("janvier");
        });                                          

        it("the function return juillet for 2022-07-08 as date", () => {  // ouvre it 2
            const date = new Date("2022-07-08");
            const resultat = getMonth(date);
            expect(resultat).toBe("juillet");
        });                                         

    });                                              

});                                                 