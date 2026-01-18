import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Menu = () => (
    <View className='w-full flex-1 bg-blue-400'>
        {/* user profile */}
        <View className='w-full h-64 bg-blue-600 justify-center items-center'>
            <Image 
                source={{
                    uri: 'https://thumbs.dreamstime.com/b/happy-young-man-friendly-salutation-saying-hello-hi-goodbye-waving-smiling-interacting-others-happy-young-384810935.jpg'
                }} 
                className="w-28 h-28 rounded-full" 
            />
            <Text className='mt-2 text-white text-lg font-semibold'> Mayura Pabasara </Text>
        </View>

        {/* menu items */}
        <View className='flex-1 p-4'>
            <Login />
            <Logout />
            <SettingItem />
            <AboutItem />
            <MenuItem />
        </View>
    </View>
);

export default Menu;

const MenuItem = () => {
    return (
        <TouchableOpacity className='w-full flex-row items-center p-4 border-b border-gray-300 justify-start'>
            {/* <View className='w-8 h-8 bg-gray-600 rounded-full mr-4' /> */}
            <AntDesign name="home" size={24} color="black" />
            <Link href="/" className='ml-4 text-lg'> Home </Link>
        </TouchableOpacity>
    )
}

const SettingItem = () => {
    return (
        <TouchableOpacity className='w-full flex-row items-center p-4 border-b border-gray-300 justify-start'>
            {/* <View className='w-8 h-8 bg-gray-600 rounded-full mr-4' /> */}
            <AntDesign name="setting" size={24} color="black" />
            <Link href="/" className='ml-4 text-lg'> Settings </Link>
        </TouchableOpacity>
    )
}

const AboutItem = () => {
    return (
        <TouchableOpacity className='w-full flex-row items-center p-4 border-b border-gray-300 justify-start'>
            {/* <View className='w-8 h-8 bg-gray-600 rounded-full mr-4' /> */}
            <Ionicons name="people-sharp" size={24} color="black" />
            <Link href="/" className='ml-4 text-lg'> About </Link>
        </TouchableOpacity>
    )
}

const Login = () => {
    return (
        <TouchableOpacity className='w-full flex-row items-center p-4 border-b border-gray-300 justify-start'>
            {/* <View className='w-8 h-8 bg-gray-600 rounded-full mr-4' /> */}
            <Entypo name="login" size={24} color="black" />
            <Link href="/" className='ml-4 text-lg'> Login </Link>
        </TouchableOpacity>
    )
}


const Logout = () => {
    return (
        <TouchableOpacity className='w-full flex-row items-center p-4 border-b border-gray-300 justify-start'>
            {/* <View className='w-8 h-8 bg-gray-600 rounded-full mr-4' /> */}
            <Entypo name="log-out" size={24} color="black" />
            <Link href="/" className='ml-4 text-lg'> Logout </Link>
        </TouchableOpacity>
    )
}


