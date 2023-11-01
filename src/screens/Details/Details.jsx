import { View, Text, Image } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Details.style'

const Details = ({ route }) => {
    const { product } = route.params

    return (
        <View style={styles.topContainer}>
            <Header title={'Detalles'} />
            <View style={styles.container}>
                <Image style={styles.imageContainer} src={product.images[0]} contentFit='contain' />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>{` $ ${product.price}`}</Text>
            </View>
        </View>
    )
}

export default Details 