import { useState } from "react"
import { FlatList, SectionList, Text, View } from "react-native"

import { styles } from "./styles"
import { CATEGORIES, PRODUCTS } from "@/utils/data"

import { Product } from "@/components/product"
import { Category } from "@/components/category"

export function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Category
            title={item}
            onPress={() => setCategory(item)}
            isSelected={item === category}
          />
        )}
        style={styles.categories}
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: 32,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <SectionList
        sections={PRODUCTS}
        keyExtractor={(item) => item}
        stickySectionHeadersEnabled={false}
        renderItem={() => <Product />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionContainer}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  )
}
