import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'; // Importing the SVG as a React component
import ProductCard from '../../components/card';
import { LinearGradient } from 'react-native-linear-gradient';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';

export default class Home extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Featured Promo Card ("30% Off") */}
        <View>
          <LinearGradient
            colors={['#ffffff1a', '#0000000e']}
            style={[styles.promoCard, styles.linearGradient]}
          >
            <View>
              <Text style={styles.promoDiscount}>30% Off</Text>
            </View>
            <View style={styles.promoImageContainer}>
              {/* Added proper Image component with local asset require and dimensions */}
              <Image
                source={require('../../assets/image/b3.png')}
                style={styles.promoImage}
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
        </View>

        {/* Category Filter Row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
        >
          <TouchableOpacity>
            <LinearGradient
              colors={['#ffffff1a', '#0000000e']}
              style={[styles.categoryButton, styles.activeCategory]}
            >
              <Text style={styles.activeCategoryText}>All</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#ffffff1a', '#0000000e']}
              style={[styles.categoryButton]}
            >
              {/* <Text style={styles.categoryIcon}>🔋</Text> */}
              <FontAwesome name="battery-full" color="#797777" size={20} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#ffffff1a', '#0000000e']}
              style={[styles.categoryButton]}
            >
              <FontAwesome name="road" color="#797777" size={20} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#ffffff1a', '#0000000e']}
              style={[styles.categoryButton]}
            >
              <FontAwesome name="dashboard" color="#797777" size={20} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#ffffff1a', '#0000000e']}
              style={[styles.categoryButton]}
            >
              <FontAwesome name="umbrella" color="#797777" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>

        {/* Product Cards Grid (2 Columns) */}
        <View style={styles.gridContainer}>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 20,
  },
  promoCard: {
    backgroundColor: 'rgba(30, 35, 48, 0.8)',
    borderRadius: 24,
    height: 200,
    padding: 20,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(54, 62, 81, 0.5)',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    // margin: 5,
    // elevation: 2,
    boxShadow: '4px 6px 7px rgba(0, 0, 0, 0.4)', // For iOS shadow
  },
  linearGradient: {},
  promoDiscount: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  promoImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // borderWidth: 1,
    // borderColor: 'rgba(141, 97, 94, 0.5)',
    height: '100%',
    width: '100%',
  },
  promoImage: {
    width: '100%', // Required: Local images need explicit width
    height: '100%', // Required: Local images need explicit height
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: 'rgba(30, 35, 48, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(54, 62, 81, 0.5)',
  },
  activeCategory: {
    backgroundColor: '#2b3447',
    width: 60,
  },
  activeCategoryText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  categoryIcon: {
    fontSize: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
