import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import allProducts from '../../data/products'
import { Header, SearchInput } from '../../components'

import style from './Products.style'

const Products = ({ navigation, route }) => {

    const [arrProducts, setArrProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    const { category } = route.params


    useEffect(() => {
        if (category) {
            const products = allProducts.filter(product => product.category === category)
            const productsFiltered = products.filter(product => product.title.includes(keyword))
            setArrProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
            setArrProducts(productsFiltered)
        }
    }, [category, keyword]);

    return (
        <View style={style.container}>
            <Header title={category} />
            <SearchInput onSearch={setKeyword} />
            <View style={style.listContainer}>
                <FlatList 
                    data={arrProducts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Details', { product: item })}>
                            <Text style={style.listas}>{item.title}</Text>
                        </TouchableOpacity>)} />
            </View>
        </View >
    )
}

export default Products
