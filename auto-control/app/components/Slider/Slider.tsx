// React and React Native Imports
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Pressable, View, Text } from "react-native";
import { Image } from "expo-image";

// Third-Party Libraries
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// Project Resources
import RightArrow from "../../../assets/images/right-arrow.svg";
import Slides from "../../resources/onboarding-slides";
import styles from "./Slider.styles";

// Custom Components
import SliderItem from "../SliderItem/SliderItem";
import OnboardingButton from "../OnboardingButton/OnboardingButton";
import Pagination from "../Pagination/Pagination";
import Login from "@/app/screens/Login/Login";

// Type Imports
import itemProps from "./Slider.types";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

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

  const handleExpandBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(2);
  };

  const snapPoints = ["25%", "50%", "90%"];

  return (
    <>
      <SafeAreaView>
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
              <Pressable onPress={handleExpandBottomSheet}>
                <Text style={styles.authLoginText}>Login</Text>
              </Pressable>
            </View>
          )}
        </View>
      </SafeAreaView>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        index={-1}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Login />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};
export default Slider;
