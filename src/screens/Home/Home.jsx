import { View, FlatList } from 'react-native'
import { Header } from '../../components'
import styles from './Home.styles'
import { CategoryItem } from './components'
import { useGetCategoriesQuery } from '../../services/shopApi'



const Home = ({ navigation }) => {

    const { data, isLoading } = useGetCategoriesQuery()


    return (
        <View style={styles.container}>
            <Header title={'CATEGORIES'} />

            {!isLoading && (
                <FlatList
                    data={data}
                    keyExtractor={category => category.title}
                    renderItem={({ item }) => <CategoryItem category={item.title}
                        navigation={navigation} />}
                />)}


        </View>

    )
}

export default Home
