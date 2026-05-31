import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {      
    render(<Home />);  
   screen.getByRole("heading", { name: "Nos réalisations" });
  })

  it("a list a people is displayed", () => {
    render(<Home />);   
    screen.getByText("Samira");
    screen.getByText("Jean-baptiste");
    screen.getByText("Alice");
  })

  it("a footer is displayed", () => {
    render(<Home />);   
    screen.getByText("Contactez-nous");
    screen.getByText("45 avenue de la République, 75000 Paris");
  })


  it("an event card, with the last event, is displayed", () => {
    render(<Home />);   
    screen.getByText("Notre derniére prestation");
  })
});
