import react from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loading from './assets/circle-loader.json';

export default AppLoader = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
      }}>
      <LottieView source={loading} autoPlay loop />
    </View>
  );
};