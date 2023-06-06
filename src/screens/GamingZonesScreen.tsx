import ScreenWrapper from 'components/ScreenWrapper';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import SearchBar from 'components/SearchBar';
import TitleBar from 'components/TitleBar';
import GamingZoneCard from 'components/GamingZoneCard';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'firebase/firebase';
import { GamingZone } from 'utils/types';
import { useLoading } from 'utils/hooks';
import { theme } from 'utils/theme';

function GamingZonesScreen() {
  const navigation = useNavigation();
  const [gamingZones, setGamingZones] = useState<GamingZone[]>([]);
  const [loading, loadingActions] = useLoading(false);

  useEffect(() => {
    (async () => {
      loadingActions.start();

      const q = query(collection(db, 'gamingZones'));

      const querySnapshot = await getDocs(q);

      const mappedData = querySnapshot.docs.map(
        doc => ({ id: doc.id, ...doc.data() } as GamingZone)
      );

      setGamingZones(mappedData);

      loadingActions.stop();
    })();
  }, []);

  return (
    <ScreenWrapper>
      <TitleBar title="Gaming Zones" />

      <View style={styles.screenWrapper}>
        {/* <SearchBar placeholder="Search Gaming Zones" /> */}

        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.lightBlue} />
        ) : (
          <ScrollView style={styles.cardsWrapper}>
            {gamingZones.map((gamingZone, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.navigate(
                    'GamingZoneDetail' as never,
                    {
                      id: gamingZone.id,
                    } as never
                  )
                }
              >
                <GamingZoneCard gamingZone={gamingZone} />
              </Pressable>
            ))}

            <View style={{ height: 32 }} />
          </ScrollView>
        )}
      </View>
    </ScreenWrapper>
  );
}

export default GamingZonesScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 24,
  },
  cardsWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
});

