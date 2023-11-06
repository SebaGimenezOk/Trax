import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Card } from '../../../../components'
import styles from './CategoryItem.styles'
import AntDesign from '@expo/vector-icons/AntDesign'

export default function CategoryItem({ category, navigation }) {
    return (
        <Pressable onPress={() => navigation.navigate('Products', { category })}>
            <Card style={styles.cardContainer}>
                {/* <AntDesign name="play" size={15} color={'white'} /> */}
                <Text style={styles.text} >{category}</Text>

            </Card>
        </Pressable>
    )
}
