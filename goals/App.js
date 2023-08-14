import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function openAddGoalModal() {
    setModalVisible(true);
  }

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentState) => [
      ...currentState,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(key) {
    setCourseGoals((state) => {
      return state.filter((item) => item.key !== key);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={"#5e0acc"}
        onPress={openAddGoalModal}
      />

      <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                item={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
