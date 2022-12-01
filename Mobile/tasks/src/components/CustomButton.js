import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, styles.shadows]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity >
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6AC66B',
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        width: (width * 0.9),
    },
    text: {
        color: '#222',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    }
})