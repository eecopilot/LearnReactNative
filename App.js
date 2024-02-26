import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";
import GoatItem from "./components/GoatItem";
import GoalInput from "./components/GoatInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: goalTitle, id: Math.random().toString() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoatItem title={itemData.item.text} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
  },
});
