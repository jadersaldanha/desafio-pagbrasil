import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

beforeEach(function(){
    cy.fixture('contactFormData').as('data')
})

Given('Usuario está na pagina do Formulario',function(){
    cy.visit('https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/form.html')
    cy.get('#name').type(this.data.name)
    cy.get('#email').type(this.data.email)
    cy.get('#company').type(this.data.company)
    cy.get('#website').type(this.data.website)
    cy.get('#phone').type(this.data.phone)
    cy.get('#inquiry').type(this.data.inquiry)
    cy.get('button').click()
    cy.get('#successMessage')
})