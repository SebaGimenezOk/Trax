import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        backgroundColor: colors.primario,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 12,
        width: 150,
        height: 150,
        marginBottom:30,


    },
    imageContainer2: {
        borderRadius: 12,
     


    },
    text: {
        fontFamily: 'PoppinsLight',
        color: 'white',

        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 14,
    },

    logo: {
        flexDirection: "row",
        gap: 10,
        marginVertical:20,
    },
    buttonCam: {
        backgroundColor: colors.tertiary,
        height: 70,
        width: '70%',
        borderRadius: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    icono: {
        color: 'white',
        flexDirection: "row",
        


    }, marca: {
        fontSize: 25,
        fontFamily: 'PoppinsBoldItalic',
        color: 'white',
    },marca2: {
        fontSize: 25,
        fontFamily: 'PoppinsLight',
        color: 'white',
    },
    text4:{
            fontFamily: 'PoppinsLight',
            color: 'white',
            alignSelf: 'center',
            marginVertical: 28,
            fontSize: 16,
            
         
    }
})