import React from 'react';
import { StyleSheet, View } from 'react-native';
import Position from './screens/Position';

export default function App() {
    return (
        <View style={styles.container}>
            <Position />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
