import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isaddMode,setAddMode]=useState(false)
 
  
  const addGoalHandler=(enteredText)=>{
    
    
    setCourseGoals(currentGoals=>[...currentGoals,{id: Math.random().toString(),value:enteredText}]);
    setAddMode(false);
    

  }
  const removeGoalHandler=(goalId)=>{
    setCourseGoals(currentGoals=>{
  return currentGoals.filter(goal=>goal.id!==goalId)

    } );
  }
  const cancelModalHandler=()=>{
    setAddMode(false);
  }

  
  return (
    <View  style={styles.screen}>
      <Button title='Add New Goal' onPress={()=>setAddMode(true)}/>
  
      <GoalInput visible={isaddMode} addGoal={addGoalHandler} onCancel={cancelModalHandler} />
    
    <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals} renderItem={itemData=> (
      <GoalItem id={itemData.item.id}  title={itemData.item.value} OnDelete={removeGoalHandler} />
    )}
       
       />

   
   
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   padding: 50
 },
 
 
});
