// import { StyleSheet, Text, View ,Button,Modal} from 'react-native'
// import React from 'react'

// const Modal = (
//     modalVisible,
//     selectedItem,
//     onCancelModal,
//     removeItem,
// ) => {
//   return (
//     <Modal
//             animationType='slide'
//             transparent={true}
//             visible={modalVisible}>

//               <View style={styles.modalContainer}>
//                 <View style={styles.modalTitle}>
//                   <Text>Eliminar Item</Text>
//                 </View>
//                   <View style={styles.modalContainer}>
//                     <Text>Esta seguro que desea eliminar el item {selectedItem?.value} ?</Text>
//                 </View>
//                 <View style={styles.modalAction}>
//                   <Button title='Cancelar' onPress={onCancelModal}
//                 //   onPress={() => {
//                 //     setModalVisible(false)
//                 //     setSelectedItem(null)
//                 //   }}
//                   />
//                    <Button title='Eliminar' onPress={() => {
//                     removeItem(selectedItem.id)
//                   }}/>
//                 </View>

//               </View>
//           </Modal>
//   )
// }

// export default Modal

// const styles = StyleSheet.create({
//     modalContainer:{
//         height:200,
//         width:300,
//         marginTop: 150,
//         alignSelf:'center',
//         backgroundColor:'gray'
//       },
//       modalTitle: {
//         backgroundColor: "#ccc",
//         padding:10,
//       },
//       modalContent: {
//         padding: 10,
//         width:'50%'
//       },
//       modalAction: {
//         marginTop:30,
//         flex:0,
//         borderRadius:10
//       },
// })