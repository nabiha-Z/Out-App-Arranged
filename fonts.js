import * as Font from 'expo-font';

export async function loadFonts() {
  await Font.loadAsync({
    'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../fonts/Roboto-Bold.ttf'),
  });
}
