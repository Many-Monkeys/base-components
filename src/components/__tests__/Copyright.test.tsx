import React from 'react'

import { render, screen } from '@testing-library/react'

import { Copyright } from '../Copyright'

test('display default company name', async () => {
  render(<Copyright />)

  expect(screen.getByText(/Many Monkeys/)).not.toBeNull()
})

test('display supplied company name', async () => {
  const company = 'New Company'
  render(<Copyright company={company} />)

  expect(screen.getByText(company, { exact: false })).not.toBeNull()
})
