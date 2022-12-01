import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ListUser = ({ user }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                {user.sex === 'M' ?
                    <Ionicons name='male-outline' size={28} color='lightblue' />
                    :
                    <Ionicons name='female-outline' size={28} color='pink' />
                }
            </View>
            <View style={styles.user}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            <Ionicons name='arrow-forward-outline' size={24} color='#bbb'/>
        </TouchableOpacity>
    );
}

export default ListUser;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    user: {
        width: '80%',
    },
    name: {
        color: '#6AC66B',
        fontSize: 20,
        marginLeft: 10,
    },
    email: {
        color: '#bbb',
        fontSize: 15,
        marginLeft: 10,
    }
});