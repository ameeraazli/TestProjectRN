import { useState } from 'react';

import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHAndler(enteredGoalText) {
    setCourseGoals(currentCourseGoals =>
      [...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ]);
  }

  function deleteGoalHAndler(){
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHAndler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}
            onDeleteItem={deleteGoalHAndler} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
});
