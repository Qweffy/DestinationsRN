import React from 'react'
import { Icon, IconProps } from '@ui-kitten/components'

export const CustomIcon = ({ name, style, ...props }: IconProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Icon {...(props as any)} name={name} style={style} />
)
