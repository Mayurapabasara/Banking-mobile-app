import { createContext, useRef } from 'react';
import { DrawerLayoutAndroid, Text, View } from 'react-native';

interface IDrawerContext {
    drawer: React.RefObject<DrawerLayoutAndroid | null>;
}
export const DrawerContext = createContext<IDrawerContext>({
    drawer: { current: null }
})

const DrawerProvider = ({children}: {children: React.JSX.Element}) => {

    const drawer = useRef<DrawerLayoutAndroid>(null)
    
    const navigationView = (
        <View style={{ flex: 1, backgroundColor: '#ccc', paddingTop: 40 }}>
            <Text>Navigation Menu</Text>
        </View>
    )

  return (
    <DrawerContext.Provider value={{drawer}}>
        <DrawerLayoutAndroid
              ref={drawer}
              drawerWidth={300}
              drawerPosition="left"
              renderNavigationView={() => navigationView}
            >
              {children}
            </DrawerLayoutAndroid>
        
    </DrawerContext.Provider>    
  )
}

export default DrawerProvider