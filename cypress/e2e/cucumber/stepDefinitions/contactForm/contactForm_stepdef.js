import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('Usuario está na pagina do Formulario',function(){
    cy.visit('https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/form.html')
})