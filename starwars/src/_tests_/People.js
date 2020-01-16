import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import People from '../components/People/People.js'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  const {queryByText, getByLabelText, getByText} = render(
    <People>{testMessage}</People>,
  )

  expect(queryByText(testMessage)).toBeNull()

 // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
 fireEvent.click(getByLabelText(/show/i))

 // .toBeInTheDocument() is an assertion that comes from jest-dom
 // otherwise you could use .toBeDefined()
 expect(getByText(testMessage)).toBeInTheDocument()
})
