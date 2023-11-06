import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchList } from '../screens/ index'
import { colors } from '../constants/colors'

const Stack = createNativeStackNavigator()

function SearchNavigator() {
    return (
        <Stack.Navigator
        initialRouteName='Search'
        barStyle={{
            backgroundColor: colors.tertiary, height: 60, justifyContent: 'center'
        }}
        labeled={false}
        activeColor="#140821"
        inactiveColor="#140821"
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Search' component={SearchList} />  
        </Stack.Navigator>
    )
}
export default SearchNavigator