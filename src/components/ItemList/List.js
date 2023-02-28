import { StyleSheet, FlatList ,Text} from 'react-native'
import React from 'react'
import Item from "./Item";

const List = ({ items, selecItem }) => {
    return (
      
      <FlatList
        data={items}
        renderItem={(itemData) => {
          return <Item itemData={itemData} selecItem={selecItem} />;
        }}
        
        keyExtractor={(item) => item.id.toString()}
      />
    );
  };

export default List

const styles = StyleSheet.create({})