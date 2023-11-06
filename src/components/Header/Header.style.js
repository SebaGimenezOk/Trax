import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary,
        height: 139,
        paddingTop: 48,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
      
            },
    text: {
        fontSize: 17,
        fontFamily: 'PoppinsLightItalic',
        color:'white',
    },
    imageContainer: {
       
        borderRadius: 12,

    },
    marca:{
        fontSize: 25,
        fontFamily: 'PoppinsBoldItalic',
        color:'white',
    },
    logo:{
        flexDirection:"row",
         gap:10,
    }
})