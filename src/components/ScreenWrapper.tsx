import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from 'utils/theme';

function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

