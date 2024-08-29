import { AnimationObject } from "lottie-react-native";

interface SliderItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string | { uri: string } | AnimationObject;
  };
}

export default SliderItemProps;
