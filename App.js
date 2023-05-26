import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//comit final
/*
echo "# aula01" >> README.md
git init
git status -u
git add .
git status -u 
git commit -m "first commit"
git config user.email "luis.woehl@escola.pr.gov.br"
git config user.name "luisão Botafogo"
git commit -m "first commit"
git status -u
git remote add origin "link"
git push -u origin "link"
git log
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
