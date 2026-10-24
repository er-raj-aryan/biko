import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

export default class ProductCard extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={['#ffffff1a', '#0000000e']}
          style={[styles.card, styles.linearGradient]}
        >
          {/* Heart/Favorite Button */}
          <TouchableOpacity style={styles.heartButton}>
            <Text style={styles.heartIcon}>♡</Text>
          </TouchableOpacity>

          {/* Product Image Area */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/image/b2.png')}
              style={styles.promoImage}
              resizeMode="contain"
            />
          </View>

          {/* Product Info */}
          <View style={styles.textContainer}>
            <Text style={styles.category}>Road Bike</Text>
            <Text style={styles.title}>PEUGEOT - LR01</Text>
            <Text style={styles.price}>$ 1,999.99</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '48%', // Takes up half the row minus space for the gap
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'rgba(30, 35, 48, 0.75)',
    borderRadius: 24,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(54, 62, 81, 0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    boxShadow: '4px 6px 7px rgba(0, 0, 0, 0.4)',
  },
  linearGradient: {},
  heartButton: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 16,
    color: '#0072ff',
  },
  imageContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
  },
  promoImage: {
    height: '100%',
  },
  textContainer: {
    marginTop: 4,
  },
  category: {
    fontSize: 11,
    color: '#8f9bb3',
    marginBottom: 2,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  price: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
  },
});
