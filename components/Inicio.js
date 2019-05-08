import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';



class Inicio extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff00',
    }
});

export default Inicio;