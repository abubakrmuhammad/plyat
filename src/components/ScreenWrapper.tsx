import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B102C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
