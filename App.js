import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/Menu';
import cp from './assets/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}> 

      </View>
      <Menu style={styles.MenuBar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
    width: '100%',
  },
  top: {
    flex: 5,
    backgroundColor: cp.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MenuBar: {
    flex: 3,
    height: 150,
  },
});


/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Look at me go</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/