import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import sytles from './SignUp.style'
import { TextInput } from 'react-native-paper'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()


    const onSubmit = () => {
        console.log(email, password, confirmPass);
        triggerSignUp({
            email,
            password,
            confirmPass
        })
        console.log(result);
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
                <TextInput style={sytles.inputEmail} placeholder='email' value={email} onChangeText={setEmail} />
                <TextInput style={sytles.inputEmail} placeholder='password' value={password} onChangeText={setPassword} />
                <TextInput style={sytles.inputEmail} placeholder='password' value={confirmPass} onChangeText={setConfirmPass} />
                <Pressable style={sytles.loginButton} onPress={onSubmit} >
                    <Text style={sytles.text2}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp