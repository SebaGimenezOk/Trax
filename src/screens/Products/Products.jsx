import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import allProducts from '../../data/products'
import { Header } from '../../components'
import style from './Products.style'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'



const Products = ({ navigation }) => {


    const category = useSelector(state => state.shop.categorySelected)
    const [keyword, setKeyword] = useState('')
    const { data, isLoading } = useGetProductsByCategoryQuery(category)


    useEffect(() => {

        if (data) {
            const productsFiltered = data.filter(product => product.title.includes(keyword))

        }
    }, []);

    return (
        <View style={style.container}>
            <Header title={category} />
            {!isLoading && (
                <View style={style.listContainer}>
                    <FlatList
                        data={Object.values(data)}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() =>
                                navigation.navigate('Details', { product: item })}>
                                <Text style={style.listas}>{item.title}</Text>
                            </TouchableOpacity>)} />
                </View>
            )}

        </View >
    )
}

export default Products
