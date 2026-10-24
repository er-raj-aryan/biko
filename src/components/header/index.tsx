import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Bike</Text>

        <TouchableOpacity>
          <LinearGradient
            colors={['#34C8E8', '#4E4AF2']}
            style={[styles.searchButton, styles.linearGradient]}
          >
            <Text style={styles.searchIcon}>🔍</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, // Clears the phone status bar/notch
    paddingBottom: 10,
    width: '100%',
  },
  linearGradient: {},
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 12, // Rounded square matching the prototype
    // backgroundColor: '#0072ff',
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#0072ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  searchIcon: {
    fontSize: 18,
  },
});
