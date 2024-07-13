import { View, Text, ScrollView } from 'react-native'

import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard imageUrl='https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title="Testing" />
      <CategoryCard imageUrl='https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title="Testing" />
      <CategoryCard imageUrl='https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title="Testing" />
      <CategoryCard imageUrl='https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title="Testing" />
      <CategoryCard imageUrl='https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title="Testing" />
    </ScrollView>
  )
}

export default Categories
