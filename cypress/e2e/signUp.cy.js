import {signup} from "../fixtures/selectors.js";


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Testing SignUp',() => {
  beforeEach(()=> {
    cy.visit('/')
  })

it('Should be able to signup',()=> {
  //Positive Scenerio
  cy.get(signup.signupBtn).click()
  cy.wait(2000)
  cy.get(signup.dontHaveanAccBtn).click()
  cy.get(signup.firstNameField).type('John')


})
})