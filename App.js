import { StyleSheet,View,ImageBackground,Text,TextInput,TouchableOpacity } from "react-native";
import React, { useState } from 'react';

export default function App() {
    const[tasks,setTasks]=useState([])
    const[task,setTask]=useState("")

    const addTask=()=>{
        if(task.trim()===""){
            alert("Please enter a task");
            return
        }
        setTasks([...tasks,task])
        setTask("")
    }

    const removeTask=(task)=>{
        setTasks(tasks.filter(t=>t!==task))
    }

    const tasksToShow=tasks.map((task,index)=>(
        <View key={index} style={styles.row}>
            <Text style={styles.taskText}>{task}</Text>
            <TouchableOpacity onPress={() => removeTask(task)}  style={styles.removeButton}>
                <Text style={styles.textButton}>X</Text>
            </TouchableOpacity>
        </View>
    ))
  return (
      <ImageBackground source={require('./assets/bg.png')} style={styles.background}>
          <View style={styles.container}>
              <View style={styles.row}>
                  <Text style={styles.text}>Enter a task</Text>
                  <TextInput value={task} onChangeText={(text)=> setTask(text)} style={styles.textInput}></TextInput>
                  <TouchableOpacity  onPress={() =>addTask()} title="Add" style={styles.addButton}>
                      <Text style={styles.textButton}>Add</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.column}>
                  {tasksToShow}
              </View>

          </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    text:{
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
    },
    taskText:{
      fontSize:20,
        color:"white",
      fontWeight:"semibold"
    },
    textInput:{
         width:150,
        height:50,
        textAlign:"center",
        borderWidth:1,
        borderRadius:10,
        color:"white"
    },
    textButton:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"bold"
    },
    container: {
        marginTop:"20%",
        flex: 1,
        alignItems: "center",
        gap:10
    },
    addButton:{
        padding:7,
      backgroundColor:"blue",
      color:"white",
        alignItems:"center",
        justifyContent:"center",
      borderRadius:10
    },
    removeButton:{
        padding:7,
        paddingHorizontal:20,
        backgroundColor:"red",
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    row:{
        gap:5,
        flexDirection:"row"
    },
    column:{
        flexDirection:"column",
        gap:10
    }
})