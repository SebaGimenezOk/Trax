import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import sytles from './Login.style'
import { TextInput } from 'react-native-paper'


const Login = () => {
  return (
    <View style={sytles.container}>
      <View style={sytles.loginContainer}>
        
        <View style={sytles.logo}>
          <Image style={sytles.imageContainer}
            source={require('../../../assets/favTrax-5.png')}
            contentFit='contain' />
    
        </View>

        <Text style={sytles.text}>Log In to Start!</Text>

        <TextInput style={sytles.inputEmail} placeholder='email' />
        <TextInput style={sytles.inputEmail} placeholder='password' />

        <Pressable style={sytles.loginButton}>
          <Text style={sytles.text2}>Log In</Text>
        </Pressable>

        <Text style={sytles.text3}>No tienes cuenta?  hazte una ya!</Text>

        <Pressable style={sytles.loginButton} >
          <Text style={sytles.text2}>Sign Up</Text>
        </Pressable>

      </View>
    </View>
  )
}

export default Login