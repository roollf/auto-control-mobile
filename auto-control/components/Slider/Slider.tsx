// React and React Native Imports
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Pressable, View, Text } from "react-native";
import { Image } from "expo-image";

// Project Resources
import RightArrow from "../../assets/images/right-arrow.svg";
import { Slides } from "@/constants/OnboardingSlides";
import styles from "./Slider.styles";

// Custom Components
import SliderItem from "../SliderItem/SliderItem";
import OnboardingButton from "../OnboardingButton/OnboardingButton";
import Pagination from "../Pagination/Pagination";
import Login from "@/app/screens/Login/Login";
import BottomSheetComponent from "@/components/BottomSheet/BottomSheetComponent";

// Type Imports
import SliderProps from "./Slider.types";
import SliderItemProps from "../SliderItem/SliderItem.types";
import { TabBarIcon } from "@/components/expo/navigation/TabBarIcon";

type PageType = SliderProps["page"];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageToDisplay, setPageToDisplay] = useState<PageType | null>(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const flatListRef = useRef<FlatList>(null);

  const handleNextPress = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < Slides.length) {
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const lastIndex = Slides.length - 1;

  const handleGoToLastSlide = () => {
    flatListRef.current?.scrollToIndex({ index: lastIndex, animated: true });
    setCurrentIndex(lastIndex);
  };

  // revisit higher order functions to fix a proper handler for the pressable onPress
  const handleExpandBottomSheet = (page: PageType) => {
    setPageToDisplay(page);
    setIsBottomSheetVisible(true);
  };

  const teste = () => {
    console.log("teste");
  };

  const handleOnClose = () => {
    setPageToDisplay(null);
    setIsBottomSheetVisible(false);
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          {currentIndex !== lastIndex ? (
            <View style={styles.headerTextContainer}>
              <Pressable onPress={handleGoToLastSlide}>
                <Text style={styles.headerText}>Pular</Text>
              </Pressable>
              <Image source={RightArrow} style={{ width: 20, height: 20 }} />
            </View>
          ) : (
            <View style={styles.headerTextContainer} />
          )}
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
            renderItem={({ item }: SliderItemProps) => (
              <SliderItem item={item} />
            )}
          />
          <Pagination Slides={Slides} SelectedDot={currentIndex} />
          {currentIndex !== Slides.length - 1 ? (
            <OnboardingButton text="Próximo" onPress={handleNextPress} />
          ) : (
            <View style={styles.authContainer}>
              <OnboardingButton text="Criar conta" onPress={handleNextPress} />

              <Pressable
                onPress={() => {
                  setPageToDisplay(Login);
                  setIsBottomSheetVisible(true);
                }}
              >
                <Text style={styles.authLoginText}>Login</Text>
              </Pressable>
            </View>
          )}
        </View>
      </SafeAreaView>
      <BottomSheetComponent
        isVisible={isBottomSheetVisible}
        onClose={handleOnClose}
        page={pageToDisplay}
      />
    </>
  );
};
export default Slider;
