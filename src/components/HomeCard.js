import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeCard = ({ title, caption, imageUrl }) => {

  // const { title, caption, image } = data;

  return (
    <Card containerStyle={styles.card}>
      {/* Cover Image */}
      <ImageBackground
        source={imageUrl}
        style={{
          resizeMode: 'cover',
          height: '100%',
          width: '100%',
        }}
      >
        <LinearGradient
          style={{ height: '100%', flexDirection: 'row' }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#292945', 'rgba(41, 41, 69, 0.00)',]}
          locations={[0, 1]}
          useAngle={true}
          angle={45}
        >


          <View style={{ height: 70, borderRadius: 10, overflow: 'hidden' }}>
          </View>

          {/* Icon and Title */}
          <View style={{ alignItems: 'bottom', marginTop: 10 }}>
            {/* <Image 
            style={{width: '5',height:10 , justifyContent: 'center',
            alignItems: 'center',}}
          source={require('../assets/video-play.png')}
/> */}

            <FontAwesomeIcon name="camera" size={30} color="#fff" />
            <FontAwesomeIcon name="close" size={30} color="#fff" />
            {/* {!Icon ? console.warn('file-movie-o') : null}
            <Icon name="glass" size={30} color="#fff" />
            <Icon name="music" size={30} color="blue" />
            <Icon name="search" size={30} color="#900" /> */}
<Icon name="star" size={18} color="gold" />

            <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff' }}>{title}</Text>
            <Text style={{ fontSize: 12, marginTop: 5, color: '#fff' }}>{caption}</Text>
          </View>

          {/* Caption */}
        </LinearGradient>
      </ImageBackground >
    </Card>
  );
};

export default HomeCard;


const styles = StyleSheet.create({

  card: {
    borderRadius: 10,
    elevation: 0,
    // backgroundColor: 'transparent',
    padding: '0',
    borderWidth: 0,
    overflow: 'hidden',
    width: '33%',
    height: '100%',
  }
})