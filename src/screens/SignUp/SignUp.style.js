import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primario,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        backgroundColor: colors.tertiary,
        width: '88%',
        paddingHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 28,
        borderRadius: 20,
    },
    inputEmail: {
        width: '95%',
        backgroundColor: colors.tertiary,
        borderRadius: 12,
        height: 30,
        marginVertical: 15,


    },
    text: {
        fontFamily: 'PoppinsLight',
        color: 'white',
        marginVertical: 18,
        fontSize: 20,

    },
    text2: {
        fontFamily: 'PoppinsLight',
        color: 'white',
        marginVertical: 18,
        fontSize: 14,
    },
    text3: {
        fontFamily: 'PoppinsLight',
        color: 'white',
        marginVertical: 18,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: colors.primario,
        width: '50%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    imageContainer: {
        borderRadius: 12,

    },
    marca: {
        fontSize: 25,
        fontFamily: 'PoppinsBoldItalic',
        color: 'white',
    },
    logo: {
        flexDirection: "row",
        gap: 10,
    }

})