import { Text, View, Image } from 'react-native'
import styles from './Header.style'


const Header = ({ title, action }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.imageContainer}
                    source={require('../../../assets/favTrax-5.png')}
                    contentFit='contain' />
                <Text style={styles.marca}>TRAX</Text>
            </View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

