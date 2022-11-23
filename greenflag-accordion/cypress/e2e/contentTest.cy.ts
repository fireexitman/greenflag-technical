// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../fixtures/data.json');

describe('Find app and validate title', () => {
    it('should visit localhost and check the title', () => {
        cy.visit('localhost:4200')
        cy.title().should('contain', "GreenflagAccordion")
    })
})

describe('Check the titles of each element', () => {
    it('should check the first accordion element title', () => {
        cy.get('accordion').first().should('contain', data.questionOne)
    })
    it('should check the second element', () => {
        cy.get('accordion').eq(1).should('contain', data.questionTwo)
    })
    it('should check the third element', () => {
        cy.get('accordion').eq(2).should('contain', data.questionThree)
    })
    it('should check the fourth element', () => {
        cy.get('accordion').eq(3).should('contain', data.questionFour)
    })
    it('should check the final element', () => {
        cy.get('accordion').last().should('contain', data.questionFive)
    })
})

describe('Check all the accordions open on click', () => {
    it('should click the plus in the first element and check the content', () => {
        cy.get('.accordion-icon').first().click()
        cy.get('.body').first().should('be.visible')
        cy.get('.accordion').first().should('have.class', 'selected');
    })
    it('should click the plus in the second element and check the content', () => {
        cy.get('.accordion-icon').eq(1).click()
        cy.get('.body').eq(1).should('be.visible');
        cy.get('.accordion').eq(1).should('have.class', 'selected');
    })
    it('should click the plus in the third element and check the content', () => {
        cy.get('.accordion-icon').eq(2).click()
        cy.get('.body').eq(2).should('be.visible');
        cy.get('.accordion').eq(2).should('have.class', 'selected');
    })
    it('should click the plus in the fourth element and check the content', () => {
        cy.get('.accordion-icon').eq(3).click()
        cy.get('.body').eq(3).should('be.visible');
        cy.get('.accordion').eq(3).should('have.class', 'selected');
    })
    it('should click the plus in the last element and check the content', () => {
        cy.get('.accordion-icon').last().click()
        cy.get('.body').last().should('be.visible');
        cy.get('.accordion').last().should('have.class', 'selected');
    })
})

describe('Check all the accordions close on a second click', () => {
    it('should close the first accordion and check the content is no longer visible', () => {
        cy.get('.accordion-icon').first().click()
        cy.get('.body').first().should('not.be.visible');
        cy.get('.accordion').first().should('not.have.class', 'selected');
    })
    it('should close the second accordion and check the content is no longer visible', () => {
        cy.get('.accordion-icon').eq(1).click()
        cy.get('.body').eq(1).should('not.be.visible');
        cy.get('.accordion').eq(1).should('not.have.class', 'selected');
    })
    it('should close the third accordion and check the content is no longer visible', () => {
        cy.get('.accordion-icon').eq(2).click()
        cy.get('.body').eq(2).should('not.be.visible');
        cy.get('.accordion').eq(2).should('not.have.class', 'selected');
    })
    it('should close the fourth accordion and check the content is no longer visible', () => {
        cy.get('.accordion-icon').eq(3).click()
        cy.get('.body').eq(3).should('not.be.visible');
        cy.get('.accordion').eq(3).should('not.have.class', 'selected');
    })
    it('should close the final accordion and check the content is no longer visible', () => {
        cy.get('.accordion-icon').last().click()
        cy.get('.body').last().should('not.be.visible');
        cy.get('.accordion').last().should('not.have.class', 'selected');
    })
})

