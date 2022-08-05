import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'
import { Profile } from '.'
import Theme from '../../chackra/theme'
describe('Profile component test', () => {
  it('component show user name', () => {
    const name = 'Jhon Doe'
    render(
      <ThemeProvider theme={Theme}>
        <Profile name={name} />
      </ThemeProvider>
    )

    expect(screen.getByText(name)).toHaveTextContent(name)
    /* const profileRender = create(<Profile name={name} />)
    const profileInstace = profileRender.root

    expect(profileInstace.props.name).toBe(name)
    expect(profileRender.toJSON()).toMatchSnapshot() */
  })
})
