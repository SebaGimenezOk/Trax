import {  View } from 'react-native'
import React from 'react'

import styles from './Card.styles'


const Card = ({ children, style }) => {
    return (
        <View style={[style, styles.container]}>
            {children}
        </View>
    )
}
export default Card

