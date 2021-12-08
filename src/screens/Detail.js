import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";

export default class Detail extends Component {
    state= {
        quantity:1
    }

    addQuantity= (quantity) => {
        this.setState({quantity: this.state.quantity + 1})
    }

    subtractQuantity= (quantity) => {
        if(this.state.quantity>0){
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    render(){
        return(
            <View style={styles.screenView}>
                <ScrollView>
                    <View style={styles.headerView}>
                        <View style={styles.backIconView}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image source={require('../images/2.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerCenterView}>
                            <View style={styles.headerTitleView}>
                                <Image source={require('../images/3.png')} style={styles.headerTitleImage}/>
                                <Text style={styles.headerTitleText}> 290 Calories </Text>
                            </View>
                        </View>
                        <View style={styles.headerFlexEndView}>
                            <Ionicons name="heart" color="#f9dd7a" size={30}/>
                        </View>
                    </View>
                    <Image source={require('../images/5.png')} style={styles.foodImage}/>
                    <View style={styles.foodOrderView}>
                        <TouchableOpacity onPress={this.addQuantity}>
                            <Text style={styles.foodOrderNumberControl}> + </Text>
                        </TouchableOpacity>
                        <Text style={styles.foodOrderNumber}>
                            {this.state.quantity}
                        </Text>
                        <TouchableOpacity onPress={this.subtractQuantity}>
                            <Text style={styles.foodOrderNumberControl}> - </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foodText}>
                        <View>
                            <Text style={styles.foodName}> Smokehouse </Text>
                            <Text style={styles.foodProperty}> Beef Burger </Text>
                        </View>
                        <Text style={styles.foodPrice}> $12.99 </Text>
                    </View>
                    <Text style={styles.ingredientsText}>Ingredients</Text>
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.ingredientsScrollView}
                    >
                        <View style={styles.ingredientsView}>
                            <Image source={require('../images/11.png')} style={styles.ingredientsImage}/>
                        </View>
                        <View style={styles.ingredientsView}>
                            <Image source={require('../images/13.png')} style={styles.ingredientsImage}/>
                        </View>
                        <View style={styles.ingredientsView}>
                            <Image source={require('../images/12.png')} style={styles.ingredientsImage}/>
                        </View>
                        <View style={styles.ingredientsView}>
                            <Image source={require('../images/8.png')} style={styles.ingredientsImage}/>
                        </View>
                        <View style={styles.ingredientsView}>
                            <Image source={require('../images/bl.png')} style={styles.ingredientsImage}/>
                        </View>
                        <View style={styles.ingredientsView}>
                            <Image source={require('../images/7.png')} style={styles.ingredientsImage}/>
                        </View>
                    </ScrollView>
                    <Text style={styles.detailsTitle}> Details </Text>
                    <Text style={styles.detailsExplanation}>
                        A hamburger (or burger for short) is a food,
                        typically considered a sandwich, consisting
                        of one or more cooked patties—usually ground
                        meat, typically beef—placed inside a sliced
                        bread roll or bun. The patty may be pan
                        fried, grilled, smoked or flame broiled.
                    </Text>
                </ScrollView>
                <View style={styles.shoppingCartView}>
                    <AntDesign name="shoppingcart" size={24} color="#FFF"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenView: {
        backgroundColor: "#FFF"
    },
    headerView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 20
    },
    backIconView: {
        width: "10%"
    },
    headerCenterView:{
        width: "80%",
        alignItems: "center"
    },
    headerTitleView: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    headerTitleImage: {
        height: 25,
        width: 20
    },
    headerTitleText: {
        paddingHorizontal: 10,
        fontWeight: "bold",
        fontSize: 16
    },
    headerFlexEndView: {
        width: "10%"
    },
    foodImage: {
        height: 340,
        width: 340,
        alignSelf:"center"
    },
    foodOrderView: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#f6f3fb",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20
    },
    foodOrderNumberControl: {
        fontWeight: "bold",
        fontSize: 18
    },
    foodOrderNumber: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    foodText: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 35
    },
    foodName: {
        fontWeight: "bold",
        fontSize: 28
    },
    foodProperty: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#a4a4a9"
    },
    foodPrice: {
        fontWeight: "bold",
        fontSize: 28,
        marginLeft: 80
    },
    ingredientsText:{
        fontWeight: "bold",
        fontSize: 28,
        marginTop: 30,
        marginHorizontal: 20
    },
    ingredientsScrollView: {
        marginTop: 20,
        marginHorizontal: 20
    },
    ingredientsView: {
        borderRadius: 15,
        borderWidth: 0.1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10
    },
    ingredientsImage: {
        height: 40,
        width: 40
    },
    detailsTitle: {
        fontWeight: "bold",
        fontSize: 28,
        marginTop: 30,
        marginHorizontal:20
    },
    detailsExplanation: {
        color: "#a4a4a9",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10,
        marginHorizontal: 20,
        textAlign: "justify"
    },
    shoppingCartView: {
        position: "absolute",
        backgroundColor: "#000",
        height: 50,
        width: 50,
        bottom: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 25
    },
})