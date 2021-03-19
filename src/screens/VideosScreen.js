import React from 'react';
import { StyleSheet, View } from 'react-native';

import TabsVideos from '../components/TabsVideos';

export default function VideosScreen() {
  return (
    <View style={styles.cardList}>
      <TabsVideos></TabsVideos>
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
  }
});
