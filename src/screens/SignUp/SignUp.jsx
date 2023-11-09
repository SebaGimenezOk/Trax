import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import sytles from './SignUp.style'
import { TextInput } from 'react-native-paper'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'


const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()


    const onSubmit = () => {
        triggerSignUp({
            email,
            password,
            confirmPass
        })
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
                    <Text style={sytles.marca}>TRAX</Text>
                </View>
                <Text style={sytles.text}>Sign Up  to Start!</Text>
             
                <TextInput 
                style={sytles.inputEmail} 
                 placeholder='email' value={email} onChangeText={setEmail} />
              
                <TextInput 
                style={sytles.inputEmail}
                placeholder='password' value={password} onChangeText={setPassword} />
              
                <TextInput style={sytles.inputEmail} 
                placeholder='password' value={confirmPass} onChangeText={setConfirmPass} />
             
                <Pressable style={sytles.loginButton} onPress={onSubmit} >
                    <Text style={sytles.text2}>Sign Up</Text>
                </Pressable>

                <Text style={sytles.text3}>Si ya tienes cuenta, avanti!!</Text>
                <Pressable style={sytles.loginButton} onPress={()=> navigation.navigate('Login')}>
                    <Text style={sytles.text2}>Log In</Text>
                </Pressable>


            </View>
        </View>
    )
}

export default SignUp