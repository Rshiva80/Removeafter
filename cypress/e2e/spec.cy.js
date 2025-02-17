import {Email} from "../support/emailutil"

describe('template spec',() => {

  before(() =>{
    cy.fixture("demoqa.json").as("data");
  })

   let TestEmail = Email();

  it.skip('passes',function () {
    //cy.viewport('iipad-mini');
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get("#firstName").type(this.data.firstname);
    cy.get("#firstName").should("have.value",this.data.firstname);
    cy.get("#lastName").type(this.data.lastname);
    cy.get("#userEmail").type(TestEmail);
    cy.get("#gender-radio-2").check({force: true} ,"Female");
    cy.get("#gender-radio-2").should("be.checked");
    cy.get("#userNumber").type("123456789");
    cy.get("#submit").click();
    cy.get(".modal-content").should("be.visible");
    // cy.get("td").contains("Student Name").next().should("have.value",`${this.data.firstname} ${this.data.lastname}`);


    cy.get("td").contains("Student Name").next().should("have.text", `${this.data.firstname} ${this.data.lastname}`);
    cy.get("td").contains("Student Email").next().should("have.text",TestEmail);

    cy.get("#closeLargeModal").click({force:true});
  
  })
})