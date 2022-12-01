import { View, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Button from "../components/Button";
import * as Animatable from 'react-native-animatable';

const ViewNav1 = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Animatable.View animation='fadeInLeft'>
                    <Button title="ViewImages"
                        onPress={() => props.navigation.navigate("ViewImages")} />
                </Animatable.View>
                <Animatable.View animation='fadeInRight'>
                    <Button title="ViewState"
                        onPress={() => props.navigation.navigate("ViewState")} />
                </Animatable.View>
                <Animatable.View animation='fadeInLeft'>
                    <Button title="ViewPicker"
                        onPress={() => props.navigation.navigate("ViewPicker")} />
                </Animatable.View>
            </SafeAreaView>
        </View>
    );
}

export default ViewNav1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
})