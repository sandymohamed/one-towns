import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import HomeCard from '../components/HomeCard';
import LinearGradient from 'react-native-linear-gradient';


const data = [
  { id: 0, icon: require('../assets/live.jpg'), title: 'Live TV', image: require('../assets/live.jpg'), caption: '+99 channels' },
  { id: 1, icon: require('../assets/live.jpg'), title: "Video's", image: require('../assets/live.jpg'), caption: '+2000 Videos' },
  { id: 2, icon: require('../assets/live.jpg'), title: 'Series', image: require('../assets/live.jpg'), caption: '+3000Series' },
];

const HomePage = () => {
  return (

    <View style={styles.homeView}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        colors={['rgba(217, 217, 217, 0.56)', 'rgba(217, 217, 217, 0)',]}
        locations={[0, 1]} // Optional, defines where each color starts and ends
        useAngle={true}
        angle={45}
      >
        <ImageBackground
          style={styles.imageBackground}
          source={require('../assets/bg-home.png')}
        >
          <LinearGradient
            style={{ height: '100%', flexDirection: 'row' }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#292945', '#42426F',]}
            locations={[0, 1]}
            useAngle={true}
            angle={45}
          >


            <ScrollView contentContainerStyle={styles.container}>
              {data.map((item) => (
                <HomeCard
                  key={item.id}
                  title={item.title}
                  caption={item.caption}
                  imageUrl={item.image}
                />
              ))}
            </ScrollView>

            <ScrollView contentContainerStyle={styles.container}>
              {data.map((item) => (
             <Text key={item.id}>lool </Text>
              ))}
            </ScrollView>

            
          </LinearGradient>
        </ImageBackground>

      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    background: '#ABABCD',
    height: '100%',
    width: '100%',
 
  },

  // contentContainer: {
  //   width: '100%',
  //   height: '100%',
  //   background: 'background: radial-gradient(259.09% 57.92% at 25.05% -10.97%, rgba(217, 217, 217, 0.56) 0%, rgba(217, 217, 217, 0.00) 100%);',

  // },

  // radialGradient: {
  //   background: 'var(--black-gradinet-3, linear-gradient(311deg, #292945 0%, #42426F 100%))'
  // },

  container: {

    height: '80%',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'space-evenly',
    padding: 10,
    zIndex: 1,
    border: 'none',
    margin: '5%',
  },

  imageBackground: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    opacity: 0.8, // Equivalent to "80%" opacity in CSS (value should be between 0 and 1)
    flexShrink: 0,
    zIndex: 0,
    // Create a pseudo-radial gradient effect with two color overlays
    background: ' rgb(2,0,36)',
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    lightgray: '50%',
    position: 'relative',
 
  },

});

export default HomePage;
