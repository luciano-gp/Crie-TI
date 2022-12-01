import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, styles.shadows]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity >
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        width: (width * 0.8),
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
    },
    shadows: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5
    }
})