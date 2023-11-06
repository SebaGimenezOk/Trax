import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        backgroundColor: colors.primario,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      

    },
    internalContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 50,
        


    },
    secondContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.primario,
        paddingBottom: 70,
        width: '90%',
        height:200,

    },


    imageContainer: {
        height: '80%',
        width: '80%',
        borderRadius: 12,

    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: 'white',
        
    },
    city: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'PoppinsLight',
        color: 'white',
    },
    description: {
        fontSize: 14,
        fontFamily: 'PoppinsLight',
        color: 'white',
    }
})