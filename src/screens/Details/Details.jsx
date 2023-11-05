import { View, Text, Image } from 'react-native'
import React from 'react'
import { Header, PlaySounds } from '../../components'
import styles from './Details.style'



const Details = ({ route }) => {
    const { product } = route.params

    return (
        <View style={styles.topContainer}>
            <Header title={'Detalles'} />
            <View style={styles.secondContainer}>
                <View style={styles.internalContainer} >
                    <Image style={styles.imageContainer} source={{ uri: product.images[0] }} contentFit='cover' />
                    <PlaySounds audioURL={product.url} />
                </View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>{product.city}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>

        </View>
    )
}

export default Details 