import { createContext, useRef } from 'react'
import { View, Text, DrawerLayoutAndroid } from 'react-native'

interface IDrawerContext {
    drawer: React.RefObject<DrawerLayoutAndroid>;
}
export const DrawerContext = createContext<IDrawerContext | null>(null)

const DrawerProvider = ({children}: {children: React.JSX.Element}) => {

    const drawer = useRef<DrawerLayoutAndroid>(null)
    

  return (
    <View>
      <Text>drawerProvider</Text>
    </View>
  )
}

export default DrawerProvider