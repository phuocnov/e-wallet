import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StyleProps } from "react-native-reanimated";

function Button(props: {
  title: string,
  onPress: () => void,
  TextStyles?: StyleProps,
  ButtonStyles?: StyleProps
}) {
  const style = StyleSheet.create({
    button: {
      backgroundColor: '#5F94E4',
      borderRadius: 8,
      padding: 10,
      ...props.ButtonStyles,
    },

    text: {
      color: 'white',
      textAlign: 'center',
      ...props.TextStyles,
    }
  });

  return (
    <TouchableOpacity style={style.button} onPress={props.onPress}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

