import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './Profile.style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import *as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../../features/auth/authSlice';
import { usePostProfileImageMutation } from '../../services/shopApi'

const Profile = () => {

    const image = useSelector((state) => state.auth.imageCamera)
    const { localId } = useSelector(state => state.auth)
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()




    const verifyCameraPermissons = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }


    const pickImage = async () => {
        const isCameraOK = await verifyCameraPermissons()

        if (isCameraOK) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.4,
            })
            if (!result.canceled) {
                console.log(result.assets);
                dispatch(
                    setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
                )
            }
        }
    }


    const confirmImage = () => triggerSaveProfileImage({ image, localId })

   console.log(result);



    return (
        <View style={style.container}>

            <View style={style.logo}>
                <Image style={style.imageContainer2}
                    source={require('../../../assets/favTrax-4.png')}
                    contentFit='contain' />
                <Text style={style.marca}>TRAX // </Text>
                <Text style={style.marca2}>Profile</Text>
            </View>

            {image ? (

                <Image style={style.imageContainer}
                    source={
                        { uri: image }
                    }
                    resizeMode='cover'
                />
            ) : (

                <Image style={style.imageContainer}
                    source={
                        { uri: 'https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,w_340,c_thumb,f_auto,q_80/mascotas/0cc6721.jpg' }
                    }
                    resizeMode='cover'
                />
            )}

            <View style={style.icono}>
                <Pressable style={style.buttonCam} onPress={pickImage}>
                    <Text style={style.text}>Tomar foto de perfil  <MaterialCommunityIcons style={style.icono} name="camera-outline" size={20} /></Text>
                </Pressable>

            </View>
            <Pressable onPress={confirmImage} >
                <Text style={style.text4}>Confirm<MaterialCommunityIcons style={style.icono} name='check-bold' size={24} /></Text>
            </Pressable>
        </View>
    )
}

export default Profile