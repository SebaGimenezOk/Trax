import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login} from '../screens/ index'


const Stack = createNativeStackNavigator()

function LoginNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
     
        </Stack.Navigator>
    )
}
export default LoginNavigator