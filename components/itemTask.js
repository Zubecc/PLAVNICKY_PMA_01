import { Pressable, StyleSheet, Text } from "react-native";

export default function ItemTask({task, changeStyle}) {

  return (
    <Pressable onPress={() => changeStyle(task.id)} deleteTask>
        <Text style={styles.taskText}>{task.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ff0505",
        margin: 5,
    },
    itemContainerTrue: {
        backgroundColor: "#00ff00",
        margin: 5,
    },
    taskText: {color: "#ffffff", fontSize: 16, padding: 5, fontWeight: "bold"}


    });