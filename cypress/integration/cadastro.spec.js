/// <reference types="cypress" />

// incluao de biblioteca de geracao de dados
var Chance = require('chance')
var chance = new Chance()

// Mocha --> Test Runner

// describe, context, it

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
       cy.visit('https://form-agilizei.netlify.app') 

     // Inputs de texto / textarea / email --> type
        // input[name=fisrtName]
        // input[name=lastname]
        // textarea[name=adress]
        // input[name=emailAdress]

     // Inputs radio / checkboxes --> check
        // input[value=f]
        // input[type=checkbox]

     //  Inputs do tipo combobx / select --> select
        // select#countries
        // select#years
        // select#months
        // select#days

     // Inputs do tipo button
        // cy.contains(nome do botão)

     // Assercao para confirmação de que a aplicação foi direcionada para a listagem
        // cy.url().should(nome do comando , referencia)   


        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())
        cy.get('input[value=f]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Livros')
        cy.get('select#countries').select('Japão', {force: true})
        cy.get('select#years').select('1990', {force: true})
        cy.get('select#months').select('Dezembro', {force: true})
        cy.get('select#days').select('15', {force: true})
        cy.get('input[name=pwd]').type('J@n123456')
        cy.get('input[name=pwdConfirm]').type('J@n123456')
        cy.contains('Finalizar cadastro').click()
        cy.url().should('contain' , 'listagem')
       
    });
});