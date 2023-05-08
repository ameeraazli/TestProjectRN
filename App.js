import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text> Welcome to Ameera's App </Text>
      </View>
      <Text style={{ margin: 16, borderWidth: 1, borderColor: 'blue', padding: 16 }}>Awesomeness reload: </Text>
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
});
