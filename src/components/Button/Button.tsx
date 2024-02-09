import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ButtonProps } from './Button.types'

import styles from './Button.styles'
import { PrimaryColors } from '../../styles/Colors'

export const Button = ({
  mainColor = PrimaryColors.CTA,
  disabled = false,
  label,
  containerStyles = {},
  buttonStyles = {},
  labelStyles = {},
  onPress,
}: ButtonProps) => {
  const buttonBackground = { backgroundColor: mainColor }
  const disabledLabel = disabled ? styles.disabledLabel : {}
  const disabledButton = disabled ? styles.disabledButton : {}

  return (
    <View style={[styles.buttonContainer, containerStyles]}>
      <TouchableOpacity
        style={[styles.button, buttonBackground, disabledButton, buttonStyles]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.buttonLabel, disabledLabel, labelStyles]}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}
