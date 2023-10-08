import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/Home.screen';
import { QueryClient, QueryClientProvider } from 'react-query';
import Constants from 'expo-constants'
import { QueryProvider } from './src/modules/Query.context';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <QueryProvider>
        <View style={styles.container}>
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      </QueryProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596be',
    marginTop: Constants.statusBarHeight,
  },
});
