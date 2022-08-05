import { create } from 'react-test-renderer'
import { Profile } from '.'

describe('Profile component test', () => {
  it('component show user name', () => {
    const name = 'Jhon Doe'
    const profileRender = create(<Profile name={name} userImageUrl="" />)
    const profileInstace = profileRender.root

    expect(profileInstace.props.name).toBe(name)
    expect(profileRender.toJSON()).toMatchSnapshot()
  })
})
