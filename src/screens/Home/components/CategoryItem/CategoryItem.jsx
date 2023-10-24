import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Card } from '../../../../components'
import styles from './CategoryItem.styles'


export default function CategoryItem({ category }) {
    return (
        <Pressable onPress={() => console.log(`esta es la categoria: ${category}`)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text} >{category}</Text>
            </Card>
        </Pressable>
    )
}
