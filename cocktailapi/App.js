import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

const CocktailCard = ({ cocktail }) => {


  return (
    <View style={styles.card}>
    <TouchableOpacity onPress={ this.callFun }>
      <Image style={styles.cardImage} source={{ uri: cocktail.strDrinkThumb }} />
      </TouchableOpacity>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{cocktail.strDrink}</Text>
      </View>
    </View>
  );

  
};

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cocktails</Text>
      <ScrollView>
        {cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 10
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;