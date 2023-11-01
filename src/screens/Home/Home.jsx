import { View, FlatList } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Home.styles'
import { CategoryItem } from './components'
import dataCategories from '../../data/dataCategories'


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title={'CATEGORIAS'} />
            <FlatList
                data={dataCategories}
                keyExtractor={category => category}
                renderItem={({ item }) => <CategoryItem category={item.title}
                    navigation={navigation} />}
            />
        </View>

    )
}

export default Home
