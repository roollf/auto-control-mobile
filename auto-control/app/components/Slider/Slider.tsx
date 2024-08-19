import React, { useCallback, useRef, useState } from "react";
import { FlatList, Pressable, View, Text } from "react-native";

import SliderItem from "../SliderItem/SliderItem";

import Slides from "../../resources/onboarding-slides";

import styles from "./Slider.styles";
import OnboardingButton from "../OnboardingButton/OnboardingButton";
import Pagination from "../Pagination/Pagination";

import RightArrow from "../../../assets/images/right-arrow.svg";

import { Image } from "expo-image";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

interface itemProps {
  item: {
    id: number;
    name: string;
    title: string;
    description: string;
    image: object;
  };
}

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleNextPress = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < Slides.length) {
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const handleGoToLastSlide = () => {
    const lastIndex = Slides.length - 1;
    flatListRef.current?.scrollToIndex({ index: lastIndex, animated: true });
    setCurrentIndex(lastIndex);
  };

  const snapPoints = ["25%", "50%", "90%"];

  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Pressable onPress={handleGoToLastSlide}>
          <Text style={styles.headerText}>Pular</Text>
        </Pressable>
        <Image source={RightArrow} style={{ width: 20, height: 20 }} />
      </View>
      <FlatList
        horizontal
        data={Slides}
        pagingEnabled
        ref={flatListRef}
        scrollEnabled={false}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: itemProps) => <SliderItem item={item} />}
      />
      <Pagination Slides={Slides} SelectedDot={currentIndex} />
      {currentIndex !== Slides.length - 1 ? (
        <OnboardingButton text="Próximo" onPress={handleNextPress} />
      ) : (
        <View style={styles.authContainer}>
          <OnboardingButton text="Criar conta" onPress={handleNextPress} />
          <Text style={styles.authLoginText}>Login</Text>
        </View>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
export default Slider;
