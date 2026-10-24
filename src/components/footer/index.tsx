import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

export default class Footer extends Component {
  render() {
    return (
      <View>
        <LinearGradient
          colors={['#ffffff1a', '#0000000e']}
          style={[styles.container, styles.linearGradient]}
        >
          {/* Active Tab (Bike) on the left with glowing blue pill */}

          <LinearGradient
            colors={['#34C8E8', '#4E4AF2']}
            style={[styles.activeTab]}
          >
            <Text style={styles.activeIcon}>🚲</Text>
          </LinearGradient>

          {/* Inactive Tabs */}
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.icon}>🗺️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.icon}>🛒</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.icon}>👤</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.icon}>📄</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: 'rgba(24, 28, 36, 0.9)', // Glassmorphism dark tint
    borderTopWidth: 1,
    borderTopColor: 'rgba(54, 62, 81, 0.6)', // Frosted edge highlight (#363E51)
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 15, // Aligns nicely above phone bottom indicator
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 0,
  },
  activeTab: {
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0072ff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0072ff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
  },
  activeIcon: {
    fontSize: 20,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  icon: {
    fontSize: 20,
    opacity: 0.4, // Dims inactive icons just like the design
  },
});
