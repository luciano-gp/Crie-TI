import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const ViewState = (props) => {
    const [user, setUser] = useState({
        name: "Luciano",
        age: 23,
        city: "Lajeado"
    })
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1)
    };

    const decrement = () => {
        setCount((prevState) => prevState - 1)
    };

    const makeBirthday = () => {
        setUser({ ...user, age: user.age + 1 })
    };

    useEffect(() => {
        console.log('Primeira renderização')
    }, []);

    useEffect(() => {
        console.log('Vazio')
    });

    useEffect(() => {
        console.log('Contador mudou')
    }, [count]);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.view}>
                    <Text style={styles.text}>Contador: {count}</Text>
                    <Button title='+' onPress={increment}></Button>
                    <Button title='-' onPress={decrement}></Button>
                </View>
                <View style={styles.view}>
                    <View style={{ textAlign: 'left' }}>
                        <Text style={styles.text}>Name: {user.name}</Text>
                        <Text style={styles.text}>Idade: {user.age}</Text>
                        <Text style={styles.text}>Cidade: {user.city}</Text>
                    </View>
                    <Button title="Fazer aniversário" onPress={makeBirthday}></Button>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default ViewState;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'left',
    },
    view: {
        marginTop: 100
    }
});