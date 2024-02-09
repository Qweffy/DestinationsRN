import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { Button } from './Button'

describe('<Button/>', () => {
  test('<Button> renders correctly', () => {
    render(<Button label={'Button'} onPress={() => {}} />)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
