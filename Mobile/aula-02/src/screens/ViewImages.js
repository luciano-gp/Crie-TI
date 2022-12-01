import { Dimensions, Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import IconJotaR from '../assets/IconJotaR.svg';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const ViewImages = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ alignItems: 'center' }}>
                <Text style={styles.text}>Imagens</Text>
                <Image
                    resizeMode='contain'
                    source={require('../../assets/favicon.png')}
                    style={{ height: 50, width: 50 }} />
                <Image
                    resizeMode='contain'
                    source={{ uri: 'https://www.univates.br/files-bravo/crie-ti/image/logo-crie-ti.png' }}
                    style={{ height: 100, width: (width * 0.5) }} />
                <IconJotaR width={200} height={200} />
            </SafeAreaView>
        </View>
    );
}

export default ViewImages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'left',
    }
})