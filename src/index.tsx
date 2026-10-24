import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import { LinearGradient } from 'react-native-linear-gradient';

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Background Glow Beam stays here in the page layout */}
      {/* <View style={styles.blueLightBeam} /> */}
      <LinearGradient
        colors={['#37B6E9', '#4B4CED']}
        style={styles.blueLightBeam}
      />

      {/* Header */}
      <Header />

      {/* Main Content Area managing global page padding */}
      <View style={styles.contentContainer}>
        <Home />
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181C24', // Global background color
    overflow: 'visible', // Ensures the blue light beam can overflow outside the container
  },
  blueLightBeam: {
    position: 'absolute',
    top: -40,
    bottom: 0,
    left: 170,
    right: -140,
    width: 520,
    height: 1050,
    backgroundColor: '#37B6E9',
    opacity: 0.45,
    borderRadius: 150,
    transform: [{ rotate: '28deg' }],
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80, // Prevents content from hiding behind the absolute footer
  },
});
