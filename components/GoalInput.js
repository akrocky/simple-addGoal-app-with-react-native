import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const goalInputHandler=(enteredText)=>{
    
        setEnteredGoal(enteredText)
      }
      const addGoalHandler=()=>{
        props.addGoal(enteredGoal)
        setEnteredGoal('')
    }
  return (
      <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
    <TextInput placeholder='course goal' style={styles.input} value={enteredGoal} onChangeText={goalInputHandler} />
    <View style={styles.buttonContainer}>
        <View style={styles.button}><Button  title='Cancel' color='red' onPress={props.onCancel}/></View>
        <View style={styles.button}><Button title='add' onPress={addGoalHandler}/></View>
    
    
    </View>
        </View>
        </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{flex:1,justifyContent:'center',alignItems:'center'},

 input: {borderColor:'black',borderWidth:1,padding:10,width:'80%',marginBottom:10},
 buttonContainer:{
     width: '60%',
     flexDirection:'row',
     justifyContent:'space-between'
 },
 button:{
    width : '40%'
 }
});
