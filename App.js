import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View ,Modal } from 'react-native';

export default function App() {

  const [itemText ,setItemText] = useState('')
  const [items, setItems]= useState([])

  //Modal 
  const [modalVisible, setModalVisible]=useState (false);
  const [selectedItem, setSelectedItem]= useState (null)

const removeItem = (id) => {
  setModalVisible(!modalVisible)
  setItems((oldArry) => oldArry.filter((item) => item.id !== id)); 
 
  setSelectedItem(null)
}

const selecItem = (item) => {
  setSelectedItem(item);
  setModalVisible(true);
}

  // useEffect( ()=> {
  //   console.log('itemText', itemText)
  // },[itemText])

  useEffect( ()=> {
    console.log('items', items)
  },[items])


  //tomar valor del input
  const onChangeText = (text) => {
    setItemText(text);
  };

  //funcion del boton agregar0
  const addItem = () => {
    setItems (oldArry => [...oldArry, {id: Date.now(),value: itemText}]);
    setItemText('');
  }

  return (
   
    <View style={styles.screen}>
      <Text style={{flex:0}}>Proyecto</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Item de la lista' 
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
        />
        <Button title='Agregar'
        onPress={addItem}
        />
      </View>
      
          <FlatList
            data= {items}
            renderItem={(itemData) => (
              <Pressable style={styles.contentList} onPress={()=>{ 
                selecItem(itemData.item)
                }}>
               <Text style={styles.item}>{itemData.item.value}</Text>
              </Pressable>
            )}  
             >
          </FlatList>
          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}>

              <View style={styles.modalContainer}>
                <View style={styles.modalTitle}>
                  <Text>Eliminar Item</Text>
                </View>
                  <View style={styles.modalContainer}>
                    <Text>Esta seguro que desea eliminar el item {selectedItem?.value} ?</Text>
                </View>
                <View style={styles.modalAction}>
                  <Button title='Cancelar' onPress={() => {
                    setModalVisible(false)
                    setSelectedItem(null)
                  }}/>
                   <Button title='Eliminar' onPress={() => {
                    removeItem(selectedItem.id)
                  }}/>
                </View>

              </View>
          </Modal>
    
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:30,
  },
  inputContainer:{
    marginTop: 30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    width:'70%',
    height: 40,
    borderBottomColor:'black',
    borderBottomWidth:1,
  },
  itemContainer:{
    marginTop:30,
    width:'100%',
    height: 40,
    alignItems:'center',
  },
  contentList:{
    padding:10,
    borderRadius:5,
    backgroundColor:"#ccc"
  },
  modalContainer:{
    height:200,
    width:300,
    marginTop: 150,
    alignSelf:'center',
    backgroundColor:'gray'
  },
  modalTitle: {
    backgroundColor: "#ccc",
    padding:10,
  },
  modalContent: {
    padding: 10,
    width:'50%'
  },
  modalAction: {
    marginTop:30,
    flex:0,
    borderRadius:10
  },
  
});
