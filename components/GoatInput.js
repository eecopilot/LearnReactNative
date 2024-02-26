import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          props.onAddGoal(enteredGoal);
          setEnteredGoal("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "68%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
