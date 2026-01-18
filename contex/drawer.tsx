import { createContext, useRef } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import Menu from '../layouts/menu';

interface IDrawerContext {
    drawer: React.RefObject<DrawerLayoutAndroid | null>;
}
export const DrawerContext = createContext<IDrawerContext>({
    drawer: { current: null }
})

const DrawerProvider = ({children}: {children: React.JSX.Element}) => {

    const drawer = useRef<DrawerLayoutAndroid>(null)
    
    const navigationView = (
        <Menu />
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