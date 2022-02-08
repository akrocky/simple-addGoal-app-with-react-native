import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = (props) => {
  return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.OnDelete.bind(this,props.id)}>
    <View  style={styles.list} > 
    <Text > {props.title} </Text> 
    </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
    list:{
        padding: 10,
        marginVertical: 10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
     
      }
});
