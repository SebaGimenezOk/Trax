import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 8,
        paddingLeft:5,
        paddingRight:6,

    },
    topContainer: {
        flex: 1,
        backgroundColor: colors.primario,
        gap: 16,
    },

    imageContainer: {
        height: '50%',
        width: '80%',
        borderRadius: 12,

    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily:'Poppins',
        color:'white',
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily:'Poppins',
        color:'white',
    },
    description: {
        fontSize: 14,
        fontFamily:'PoppinsLight',
        color:'white',
    }
})