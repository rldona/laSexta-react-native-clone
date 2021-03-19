import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Card from "./Card";

const FirstRoute = () => (
  <View style={styles.scene}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={styles.scene}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </ScrollView>
  </View>
);

const ThirdRoute = () => (
  <View style={styles.scene}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </ScrollView>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'NOTICIAS' },
    { key: 'second', title: 'LASEXTA' },
    { key: 'third', title: 'EL MURO' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        style={{ backgroundColor: '#DDD', elevation: 0, borderColor: '#DDD', borderBottomWidth: 1, height: 50 }}
        labelStyle={{ fontSize: 14, fontWeight: 'bold' }}
        indicatorStyle={{ backgroundColor: '#00b023', height: 4 }}
        activeColor={'#222'}
        inactiveColor={'#999'}
        inactiveOpacity={0.5}
        activeOpacity={1.0}
      />
    );
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
});
