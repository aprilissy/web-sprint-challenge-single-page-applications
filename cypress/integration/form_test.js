describe('Pizza Order Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza-form')
  })

  const orderNameInput = () => cy.get('input[name="orderName"]')
  const specialInput = () => cy.get('input[name="specialInst"]')
  const mushroomsChk = () => cy.get('input[name="mushrooms"]')
  const spinachChk = () => cy.get('input[name="spinach"]')
  const sausageChk = () => cy.get('input[name="sausage"]')
  const pineappleChk = () => cy.get('input[name="pineapple"]')
  const submitBtn = () => cy.get('button[id=submit]')


  it('check that the above elements exist', () => {
    orderNameInput().should('exist')
    specialInput().should('exist')
    mushroomsChk().should('exist')
    spinachChk().should('exist')
    sausageChk().should('exist')
    pineappleChk().should('exist')
    submitBtn().should('exist')
  })

  describe('Fields accept correct input', () => {
    it('can enter text inputs', () => {

      orderNameInput().should('have.value', '')
      .type('lkjlkj')
      .should('have.value','lkjlkj')

      specialInput().should('have.value', '')
      .type('jkljkl')
      .should('have.value', 'jkljkl') 
    })

    it('can mark the checkboxes', () => {
      mushroomsChk().check()
      spinachChk().check()
      sausageChk().check()
      pineappleChk().check()

    })

    it('can submit form via submit button', () => {
      submitBtn().click()
    })
  })
})