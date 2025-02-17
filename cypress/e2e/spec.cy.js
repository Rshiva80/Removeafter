import {Email} from "../support/emailutil"

describe('template spec',() => {

  before(() =>{
    cy.fixture("demoqa.json").as("data");
  })

   let TestEmail = Email();

  it('passes',function () {
    //cy.viewport('iipad-mini');
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get("#firstName").type(this.data.firstname);
    cy.get("#lastName").type(this.data.lastname);
    cy.get("#userEmail").type(TestEmail);
  
  })
})