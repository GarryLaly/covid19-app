import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategoryItem = ({ label, isActive, onChoose }) => {
  return (
    <TouchableOpacity
      onPress={onChoose}
      style={[
        styles.itemContainer,
        { backgroundColor: isActive ? "#fff" : "#6C65AC" },
      ]}
    >
      <Text
        style={{
          color: isActive ? "#0D1333" : "#fff",
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const StatisticCategoryBar = ({ activeCategory, onChange }) => {
  return (
    <View style={styles.categoryContainer}>
      <CategoryItem
        label="My Country"
        isActive={activeCategory == "country"}
        onChoose={() => onChange("country")}
      />
      <CategoryItem
        label="Global"
        isActive={activeCategory == "global"}
        onChoose={() => onChange("global")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "#6C65AC",
    marginHorizontal: 16,
    borderRadius: 50,
    padding: 4,
    flexDirection: "row",
    marginTop: 25,
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 50,
  },
});

export default StatisticCategoryBar;
