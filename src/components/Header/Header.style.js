import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secundario,
        height: 99,
        paddingTop: 18,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily: 'PoppinsLightItalic',
    },
    imageContainer: {
      
        borderRadius: 12,
    }
})