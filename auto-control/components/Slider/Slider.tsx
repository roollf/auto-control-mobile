// import from react and hooks
import React, { useRef, useState } from "react"
import { FlatList, Pressable, View, Text, Dimensions } from "react-native"
import { Image } from "expo-image"
import { router } from "expo-router"

// Project Resources
import { ITEM_WIDTH } from "./Slider.styles"

// Custom Components
import SliderItem from "../SliderItem/SliderItem"
import OnboardingButton from "../OnboardingButton/OnboardingButton"
import Pagination from "../Pagination/Pagination"
import BottomSheetComponent from "@/components/BottomSheet/BottomSheetComponent"

// import from types, utils and constants
import SliderProps from "./Slider.types"
import SliderItemProps from "../SliderItem/SliderItem.types"
import { Slides } from "@/constants/OnboardingSlides"

// import from styles
import styles from "./Slider.styles"

// import from routes
import Login from "@/app/auth/login"
import Register from "@/app/auth/(register)/register"
import RegisterConfirmation from "@/app/auth/(register)/register-confirmation"

// import from images and svgs
import RightArrow from "../../assets/images/right-arrow.svg"

// color scheme and variables

type PageType = SliderProps["page"]

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [pageToDisplay, setPageToDisplay] = useState<PageType | null>(null)
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false)

  const flatListRef = useRef<FlatList>(null)

  const handleNextPress = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex < Slides.length) {
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true })
      setCurrentIndex(nextIndex)
    }
  }

  const lastIndex = Slides.length - 1

  const handleGoToLastSlide = () => {
    flatListRef.current?.scrollToIndex({ index: lastIndex, animated: true })
    setCurrentIndex(lastIndex)
  }

  const handleExpandBottomSheet = (page: PageType) => {
    setPageToDisplay(page)
    setIsBottomSheetVisible(true)
  }

  const handleOnClose = () => {
    setPageToDisplay(null)
    setIsBottomSheetVisible(false)
  }

  const handleAccountCreatedNavigation = () => {
    setPageToDisplay(<RegisterConfirmation />)
  }

  return (
    <>
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
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: SliderItemProps) => <SliderItem item={item} />}
        />
        <Pagination Slides={Slides} SelectedDot={currentIndex} />
        <View style={{ paddingBottom: 20 }} />
        {currentIndex !== Slides.length - 1 ? (
          <>
            <OnboardingButton text="Próximo" onPress={handleNextPress} />
            <View style={styles.separator} />
          </>
        ) : (
          <View style={styles.authContainer}>
            <OnboardingButton
              text="Criar conta"
              onPress={() =>
                handleExpandBottomSheet(
                  <Register
                    handleOnClose={handleOnClose}
                    onRegisterSuccess={handleAccountCreatedNavigation}
                  />
                )
              }
            />
            <Pressable onPress={() => handleExpandBottomSheet(<Login />)}>
              <Text style={styles.authLoginText}>Login</Text>
            </Pressable>
          </View>
        )}
      </View>
      <BottomSheetComponent
        isVisible={isBottomSheetVisible}
        onClose={handleOnClose}
        page={pageToDisplay}
      />
    </>
  )
}

export default Slider
