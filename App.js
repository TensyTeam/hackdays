import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Improve your company</Text>
                <Image
                    style={styles.img}
                    source={require('./img/1.png')}
                />
                <Image
                    style={styles.img}
                    source={require('./img/2.png')}
                />
                <Image
                    style={styles.img}
                    source={require('./img/3.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '90%',
        height: '25%',
        margin: 'auto',
    },
    text: {
        fontSize: 20,
        padding: 20,
    },
});
