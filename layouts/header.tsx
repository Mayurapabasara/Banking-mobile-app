import { Text, View } from 'react-native'

interface IHeader {
    Left?: React.ReactNode;
    centerText?: string;
    Center?: React.ReactNode;
    Right?: React.ReactNode;
}

const Header = ({ Left, centerText, Center, Right }: IHeader) => {
  return (
    <View style={{ elevation: 10 }} className="w-full h-28 bg-gray-400 flex-row pb-5 items-end justify-between items-buttom px-6 shadow-md">
      
        {Left ? Left : <Text></Text>}
        {/* {centerText ? <Text className="text-lg font-bold">{centerText}</Text> : <Text></Text>} */}
        {Center ? Center : centerText ? <Text className="text-lg font-semibold">{centerText}</Text> : <Text></Text>}
        {Right ? Right : <Text></Text>}

    </View>
  )
}

export default Header