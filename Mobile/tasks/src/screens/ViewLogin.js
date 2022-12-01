import { AppContext } from '../contexts/AppContext';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from 'expo-checkbox';

import IconJotaR from '../assets/images/IconJotaR.svg';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';

import base64 from 'base-64';
import axios from 'axios';

import * as SecureStore from 'expo-secure-store';

const { width, height } = Dimensions.get('window');

const { email, password } = useContext(AppContext);

const ViewLogin = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        keepSave: false
    });

    useEffect(() => {
        getSecureStorage();
    }, [])

    const getSecureStorage = async () => {
        const _username = await SecureStore.getItemAsync('tasks_username');
        const _password = await SecureStore.getItemAsync('tasks_password');
        if (_username && _password) {
            setCredentials({
                username: _username,
                password: _password,
                keepSave: true
            });
        }
    }

    const login = async () => {
        setLoading(true);
        const token = base64.encode(`${credentials.username}:${credentials.password}`);
        const headers = { 'Authorization': 'Basic ' + token };

        try {
            const response = await axios.post('http://177.44.248.30:3333/auth', {}, { headers })
            const user = response.data;
            if (credentials.keepSave) {
                await SecureStore.setItemAsync('tasks_username', user.email);
                await SecureStore.setItemAsync('tasks_password', user.password);
            } else {
                await SecureStore.deleteItemAsync('tasks_username');
                await SecureStore.deleteItemAsync('tasks_password');
            }
            setLoading(false);
            navigation.navigate("ViewSkeleton");
        } catch (err) {
            setLoading(false);
            Alert.alert('Falha de login', 'Usuário ou senha incorretos');
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Animatable.View animation='fadeInLeft'>
                    <KeyboardAvoidingView style={styles.login}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        {loading ? <ActivityIndicator size='large' color='#6AC66B' />
                            : <>
                                <IconJotaR width={150} height={150} />
                                <TextInput
                                    style={styles.input}
                                    keyboardType="email-address"
                                    autoCapitalize='none'
                                    placeholder="Usuário"
                                    placeholderTextColor='#bebebe'
                                    onChangeText={(username) => setCredentials({ ...credentials, username: username })}
                                    value={credentials.username ? credentials.username : null}
                                />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                    placeholder="Senha"
                                    placeholderTextColor='#bebebe'
                                    onChangeText={(password) => setCredentials({ ...credentials, password: password })}
                                    value={credentials.password ? credentials.password : null}
                                />
                                <View style={styles.keep}>
                                    <CheckBox
                                        value={credentials.keepSave}
                                        color={credentials.keepSave ? '#6AC66B' : '#bebebe'}
                                        onValueChange={() => setCredentials({ ...credentials, keepSave: !credentials.keepSave })}
                                    />
                                    <Text style={styles.keepText}>Manter conectado</Text>
                                </View>
                                <CustomButton title='Entrar' onPress={() => login(credentials)} />
                            </>}
                    </KeyboardAvoidingView>
                </Animatable.View>
            </SafeAreaView>
        </View>
    );
}

export default ViewLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    login: {
        marginTop: -50,
        alignItems: 'center',
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#6AC66B',
        borderRadius: 10,
        padding: 10,
        width: (width * 0.9),
        color: 'white',
        marginBottom: 10,
    },
    keep: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: (width * 0.9),
    },
    keepText: {
        color: 'white',
        marginLeft: 10,
    }
});
