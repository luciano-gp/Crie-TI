import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({ item, onPress, onValueChange }) => {
    return (
        <View style={[styles.item, { justifyContent: 'space-between' }]}>
            <View style={styles.item}>
                <CheckBox
                    value={item.done}
                    color={item.done ? '#6AC66B' : '#fff'}
                    onValueChange={onValueChange} />
                <Text style={[styles.text, {
                    textDecorationLine: item.done ? 'line-through' : 'none',
                    color: item.done ? 'grey' : '#fff',
                }]}>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name='trash-outline' size={24} color='#6AC66B' />
            </TouchableOpacity>
        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
    }
});
