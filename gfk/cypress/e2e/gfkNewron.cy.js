describe('gfkNewron Test Suite', () => {

  beforeEach('Visit Homepage', () => {
    cy.visit('https://www.gfk.com/home')
    cy.title('Page title').should('contain', 'GfK')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#onetrust-accept-btn-handler').should('contain', 'Accept All').click()
  })

  it('TC01: Verify OneTrust popup is displayed', () => {
    cy.get('#onetrust-group-container').should('contain', 'Information on the use of Cookies')
    cy.get('#onetrust-pc-btn-handler').should('contain', 'Cookies Settings')
    cy.get('#onetrust-accept-btn-handler').should('contain', 'Accept All')
    cy.get('#onetrust-reject-all-handler').should('contain', 'Reject All')
  })

  it('TC02: Verify click Accept All', () => {
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#onetrust-group-container').should('not.be.visible')
  })

  it('TC03: Verify Contact us page redirection', () => {
    cy.get('.popup__button--hide svg').click()
    cy.get('.MO-form__headline').should('contain', 'Contact us')
  })

  it.only('TC04: Fill-in the form', () => {

    cy.get('.popup__button--hide svg').click()

    //Dropdown - Salutation
    cy.get('#salutation_preference-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .select('Mr.')

    //Textbox - First Name
    cy.get('#firstname-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .type('Adis')

    //Textbox - Last Name
    cy.get('#lastname-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .type('Suffian')

    //Textbox - Email
    cy.get('#email-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .type('adissuffian@email.com')

    //Dropdown - Country
    cy.get('#country-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .select('MY')

    //Textbox - Company Name
    cy.get('#country-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .type('Company X')

    //Dropdown - Reason for contact
    cy.get('#reason_for_contact-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .select('General inquiry')

    //Textbox - Message
    cy.get('#message-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .type('Hello there!')

    //Dropdown - Job role
    cy.get('#job_role-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .select('Unknown')

    //Dropdown - Department
    cy.get('#job_role-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
    cy.get('#contact_department-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .select('IT')

    //Dropdown - Industry      
    cy.get('#gfk_account_industry-b8b058e9-fb65-4f5e-bc03-e17ad695b41a')
      .select('200')

    //Tickbox - Consent  
    cy.get('.hs-input[type="checkbox"]')
      .check()
  })


})