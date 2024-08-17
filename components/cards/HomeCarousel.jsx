import React from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import HomeFlightView from "./HomeFlightView";

const { width } = Dimensions.get("window");

const data = [1, 2, 3, 4, 5];

export default function HomeCarousel() {
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={500}
        autoPlayInterval={3000}
        autoPlay={true}
        data={data}
        renderItem={({ index }) => (
          <View style={{ paddingHorizontal: 0 }}>
            <HomeFlightView />
          </View>
        )}
        mode="parallax"  
        modeConfig={{
          parallaxScrollingScale: 0.88,  
          parallaxScrollingOffset: 60,   
        }}
        snapEnabled
        
      />
    </View>
  );
}
