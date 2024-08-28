//React and React Native imports
import React, { useEffect, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

//Project resources
import styles from "./BottomSheetComponent.styles";

// Type imports
import BottomSheetComponentProps from "./BottomSheetComponent.types";

const BottomSheetComponent = ({
  page,
  isVisible,
  onClose,
}: BottomSheetComponentProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = ["25%", "50%", "90%"];

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.snapToIndex(2);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose
      index={-1}
      snapPoints={snapPoints}
      onClose={onClose}
    >
      <BottomSheetView style={styles.contentContainer}>{page}</BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetComponent;
