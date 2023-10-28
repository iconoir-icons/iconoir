import {
  Check,
  Iconoir,
  IconoirProvider,
  Medal1st,
} from 'iconoir-react-native';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Iconoir />

      <IconoirProvider
        iconProps={{
          color: '#1E441E',
          strokeWidth: 1,
          width: '2em',
          height: '2em',
        }}
      >
        <Check />
      </IconoirProvider>
    </View>
  );
}
