import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => props.onDeleteItem(props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    backgroundColor: "orange",
    color: "white",
  },
});

export default GoalItem;
