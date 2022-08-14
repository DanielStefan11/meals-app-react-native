import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  // navigation and route props come from Stack.Screen by default
  // as long as the component is subscribed
  // if not subscribed, use useRoute/useNavigation hooks
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  };

  return <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryItem} numColumns={2} />;
};

export default CategoriesScreen;
