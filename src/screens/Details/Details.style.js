import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {

    },
    internalContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    secondContainer: {
        alignContent: 'center',
        backgroundColor: colors.primario,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,

    },
    topContainer: {
        flex: 1,
        backgroundColor: colors.primario,
        justifyContent: 'center',

    },

    imageContainer: {
        height: '100%',
        width: '60%',
        borderRadius: 12,

    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: 'white',
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: 'white',
    },
    description: {
        fontSize: 14,
        fontFamily: 'PoppinsLight',
        color: 'white',
    }
})