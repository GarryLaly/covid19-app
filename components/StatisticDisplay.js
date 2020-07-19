import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StatisticDisplay = ({ backgroundColor, title, value, isValueBig }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={[styles.textValue, { fontSize: isValueBig ? 24 : 20 }]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 8,
    marginTop: 16,
  },
  textTitle: {
    color: "#fff",
    fontSize: 14,
  },
  textValue: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 28,
  },
});

export default StatisticDisplay;
