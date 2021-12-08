import React, {Component} from "react";
import {View, Image, TouchableOpacity, Text, StyleSheet} from "react-native";

export default class Product extends Component {
    render(){
        return(
           <TouchableOpacity onPress={this.props.onPress} style={styles.touchableOpacity} marginTop={this.props.marginTop} >
               <View style={styles.fireImageView}>
                   <Image source={require('../images/3.png')} style={styles.fireImage}/>
                   <Text style={styles.fireText}>290 Calories</Text>
               </View>
               <Image source={this.props.image} style={styles.foodImage}/>
               <Text style={styles.foodName}>{this.props.title}</Text>
               <Text style={styles.foodProperty}>Beef Burger</Text>
           </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: "#f5f5fa",
        height: 280,
        width: 160,
        borderRadius: 20,
        marginRight: 10,
    },
    fireImageView: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20
    },
    fireImage: {
        height:25,
        width:20
    },
    fireText: {
        paddingHorizontal: 10,
        fontWeight: "bold",
        fontSize: 16
    },
    foodImage: {
        height: 105,
        alignSelf: "center",
        width: 130,
        marginTop: 15,
        marginBottom: 15
    },
    foodName: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    foodProperty: {
        fontSize: 15,
        fontWeight: "bold",
        paddingHorizontal: 10,
        color: "#848385"
    }
})