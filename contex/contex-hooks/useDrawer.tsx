import { useContext } from 'react'
import { DrawerContext } from '../drawer'

const useDrawer = () => {
    return useContext(DrawerContext)
}

export default useDrawer