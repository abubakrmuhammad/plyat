import { StyleSheet, Text, View } from 'react-native';
import { theme } from 'utils/theme';

function Pill({
  title,
  color = theme.colors.lightBlue,
}: {
  title: string;
  color?: string;
}) {
  return (
    <View style={{ ...styles.wrapper, backgroundColor: color }}>
      <Text
        style={{ color: theme.colors.white, fontSize: 12, fontWeight: '400' }}
      >
        {title}
      </Text>
    </View>
  );
}

export default Pill;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    minWidth: 100,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderRadius: 8,
    marginBottom: 14,
  },
});

