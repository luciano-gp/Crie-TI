import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

const ViewPicker = () => {
    const [selected, setSelected] = useState();

    list = [
        { label: 'JavaScript', value: '1' },
        { label: 'TypeScript', value: '2' },
        { label: 'Java', value: '3' },
        { label: 'PHP', value: '4' },
        { label: 'C#', value: '5' },
        { label: 'Python', value: '6' },
    ]

    return (
        <View style={styles.container}>
            <Picker
                style={styles.drop}
                mode='dropdown'
                selectedValue={selected}
                onValueChange={(value) => setSelected(value)}>
                {
                    list.map((item) => {
                        return <Picker.Item
                            style={styles.text}
                            key={item.value}
                            label={item.label}
                            value={item.value} />
                    })
                }
            </Picker>
        </View>
    )
}

export default ViewPicker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drop: {
        backgroundColor: 'lightblue',
        width: (width * 0.8),
    },
    text: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
    },
});