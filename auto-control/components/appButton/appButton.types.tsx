import { PressableProps } from "react-native"

interface BaseButtonProps extends PressableProps {
  label: string
  destination: () => void
}

interface PrimaryButtonProps extends BaseButtonProps {
  isPrimary?: true
  backgroundColor?: string
}

interface SecondaryButtonProps extends BaseButtonProps {
  isPrimary?: false
  backgroundColor?: string
}

export type ButtonProps = PrimaryButtonProps | SecondaryButtonProps
