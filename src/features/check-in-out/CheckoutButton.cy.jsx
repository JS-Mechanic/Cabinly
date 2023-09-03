import React from 'react'
import CheckoutButton from './CheckoutButton'

describe('<CheckoutButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CheckoutButton />)
  })
})