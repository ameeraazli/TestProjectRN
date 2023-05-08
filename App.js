import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.dummyText}> Welcome to Ameera's App </Text>
      </View>
      <Text style={styles.dummyText}>Awesomeness reload: </Text>
      <Button title='Tap me!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16,
  }
});
