import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import sytles from './Login.style'
import { TextInput } from 'react-native-paper'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { useState } from 'react'


const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin, result] = useLoginMutation()
  const dispatch = useDispatch()
  
  const onSubmit = () => {
    triggerLogin({
        email,
        password,
    })
    console.log(result);
    if (result.isSuccess) {
        dispatch(setUser(result))
    }
}
  
  

  return (
    <View style={sytles.container}>
      <View style={sytles.loginContainer}>
      <View style={sytles.logo}>
                    <Image style={sytles.imageContainer}
                        source={require('../../../assets/favTrax-5.png')}
                        contentFit='contain' />
                    <Text style={sytles.marca}>TRAX  </Text>
                </View>
     

        <Text style={sytles.text}>Log In to Start!</Text>

        <TextInput style={sytles.inputEmail} placeholder='email'value={email} onChangeText={setEmail} />
        <TextInput style={sytles.inputEmail} placeholder='password' value={password} onChangeText={setPassword} />

        <Pressable style={sytles.loginButton} onPress={onSubmit}>
          <Text style={sytles.text2}>Log In</Text>
        </Pressable>

        <Text style={sytles.text3}>No tienes cuenta?  hazte una ya!</Text>

        <Pressable style={sytles.loginButton} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={sytles.text2}>Sign Up</Text>
        </Pressable>

      </View>
    </View>
  )
}

export default Login