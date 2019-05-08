import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inicio from './components/Inicio';
import Contenido from './components/contenido';
import Footer from './components/footer';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      numero: 4
    }
  }

  aumentar = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  disminuir = () => {
    this.setState({
      numero : this.state.numero - 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Inicio name="Calculadora"/> 
        <Contenido value={this.state.numero}/>
        <Footer sumar={this.aumentar} restar={this.disminuir} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //El flex padre es el 100% y los que esten adentro se dividien según el numero que se les coloque.
    backgroundColor: '#fff',
    //flexDirection:'row'
  }
});

//export default  App; //Nos permite marcar la clase como publica para que pueda ser exportada.