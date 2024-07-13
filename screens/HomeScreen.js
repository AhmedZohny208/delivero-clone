import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline'

import Categories from '../components/Categories'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View>
      {/* HEADER */}
      <View className='bg-white' style={styles.container}>
        <View className='flex-row items-center gap-2 mx-4 pb-3'>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg',
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <View className='flex-1'>
            <Text className='text-xs text-gray-400 font-bold'>
              Deliver Now!
            </Text>
            <View className='flex-row items-center gap-1'>
              <Text className='font-bold text-xl'>Current Location</Text>
              <ChevronDownIcon size={20} color='#00CCBB' />
            </View>
          </View>

          <UserIcon size={35} color='#00CCBB' />
        </View>

        {/* SEARCH */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='bg-gray-200 flex-row flex-1 items-center space-x-2 p-3'>
            <MagnifyingGlassIcon size={20} color='#00CCBB' />
            <TextInput
              placeholder='Restaurants and cuisines'
              keyboardType='default'
            />
          </View>

          <AdjustmentsVerticalIcon size={35} color='#00CCBB' />
        </View>
      </View>

      {/* BODY */}
      <ScrollView>
        {/* CATEGORIES */}
        <Categories />
        {/* FEATURED ROWS */}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 16 : 40,
  },
})
