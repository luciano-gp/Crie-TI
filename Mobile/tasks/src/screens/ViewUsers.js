import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';

import base64 from 'base-64';
import axios from 'axios';
import ListUser from '../components/ListUser';
import { FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

const ViewUsers = () => {
    const [users, setUsers] = useState({});
    const getUsers = async () => {
        const headers = { 'Authorization': 'Basic ' + base64.encode(`mateus@mateus.com:12345`) };

        try {
            const req = await axios.get('http://177.44.248.30:3333/users', { headers });
            setUsers(req.data);
        } catch (err) {
            Alert.alert('Falha de login', 'Usuário ou senha incorretos');
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de usuários</Text>
            {
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <ListUser user={item} />
                        )
                    }}
                />
            }
        </View >
    );
}

export default ViewUsers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    text: {
        marginBottom: 5,
        width: (width * 0.9),
        color: 'white',
    },
    title: {
        fontSize: 25,
        marginBottom: 25,
        color: '#6AC66B',
    }
});