import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import allProducts from '../../data/products'
import { SearchInput, Header } from '../../components'
import style from './SearchList.style'
import { useSelector } from 'react-redux'



const SearchList = ({ navigation }) => {
    const category = useSelector(state => state.shop.categorySelected)
    const [arrProducts, setArrProducts] = useState([])
    const [keyword, setKeyword] = useState('')



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
            <Header title={'SELECT YOU STATION'} />
            <SearchInput onSearch={setKeyword} />
            <View >
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

export default SearchList