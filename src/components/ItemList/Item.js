import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

let productosStock =  [
  {id:1, titulo: "Uncharted: Legacy of Thieves Collection",cantidad:1,ps:5,descripcion:"Uncharted: Legacy of Thieves Collection reúne en una sola compra los dos últimos videojuegos de la serie de acción y aventura de Naughty Dog: Uncharted 4: A Thief's End, protagonizado por la estrella de la franquicia Nathan Drake, y Uncharted: The Lost Legacy, con Chloe Frazer y Nadine Ross como figuras clave de su historia. Este recopilatorio se lanza en PS5 y PC, llevando así la exitosa saga de consolas a todos los jugadores que lo deseen en ordenador.",precio:1949,img:'https://gorilagames.com/img/Public/1019-producto-uncharted-7422.jpg'},
  {id:2, titulo: "Stray",cantidad:1,ps:5,descripcion:"Stray es un videojuego de acción y aventuras en tercera persona protagonizado por un gato ambientado en los callejones iluminados por el neón de una ciberciudad decadente y sus turbios rincones. En Stray, nuestro compañero felino, perdido, solo y separado de su familia, ha de deambular por la urbe habitado por androides inocentes y criaturas peligrosas, defenderse de amenazar imprevistas y resolver un antiguo misterio para escapar de una ciudad olvidada.",precio:15290,img:'https://gorilagames.com/img/Public/1019-producto-stray-ps5-5610.jpg'},
  {id:3, titulo: "Need for Speed Unbound",cantidad:1,ps:5,descripcion:"Stray es un videojuego de acción y aventuras en tercera persona protagonizado por un gato ambientado en los callejones iluminados por el neón de una ciberciudad decadente y sus turbios rincones. En Stray, nuestro compañero felino, perdido, solo y separado de su familia, ha de deambular por la urbe habitado por androides inocentes y criaturas peligrosas, defenderse de amenazar imprevistas y resolver un antiguo misterio para escapar de una ciudad olvidada.",precio:15290,img:'https://gorilagames.com/img/Public/1019-producto-need-for-speed-unbound-ps5-2854.jpg'},
  {id:4, titulo: "Stray",cantidad:1,ps:5,descripcion:"Need for Speed: Unbound de Criterion es el nuevo episodio de esta longeva serie de juegos de carreras donde se invita al usuario a demostrar que tiene todo lo necesario para ganar el Grand, el desafío de carreras callejeras definitivo de Lakeshore. Corre hasta lo más alto, sin llevarte chascos, supera a la policía y participa en las eliminatorias semanales del Grand, la carrera callejera definitiva para el ganar el dinero suficiente con el que competir en las principales competiciones y llenar el garaje con oches personalizados y tuneados con precisión.",precio:27690,img:'https://gorilagames.com/img/Public/1019-producto-stray-ps5-5610.jpg'},
]

const Item = ({ itemData, selecItem }) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => {
            selecItem(itemData.item);
        }}
      >
        <Text style={styles.item}>{itemData.item.value}</Text>
      </Pressable>
    );
  };
  

export default Item

const styles = StyleSheet.create({
    contentList:{
        padding:10,
        borderRadius:5,
        backgroundColor:"#ccc"
      },
      item:{
        padding: 10,
        textAlign:"center",
        backgroundColor:"silver",
        margin:10,
        borderRadius:50
      }
})