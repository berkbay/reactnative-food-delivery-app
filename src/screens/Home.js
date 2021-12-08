import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {ScrollView,} from "react-native-gesture-handler";
import {Entypo, Ionicons} from '@expo/vector-icons';
import Product from "../components/Product";


export default class Home extends Component {
    state={
        city: "Izmir"
    }
    render(){
        return(
            <ScrollView style={styles.headerScrollView}>
                <View style={styles.headerView}>
                    <View style={styles.headerImageView}>
                        <Image source={require('../images/1.png')} />
                    </View>
                    <View style={styles.pickerView}>
                        {/*<Picker*/}
                        {/*selectedValue={this.state.city}*/}
                        {/*style={styles.picker}*/}
                        {/*onValueChange={(itemValue,itemIndex) => this.setState({city: itemValue})}*/}
                        {/*>*/}
                        {/*    <Picker.Item label={"Izmir"} value={"Izmir"} style={styles.pickerItem}/>*/}
                        {/*    <Picker.Item label={"Istanbul"} value={"Istanbul"} style={styles.pickerItem}/>*/}
                        {/*    <Picker.Item label={"Ankara"} value={"Ankara"} style={styles.pickerItem}/>*/}
                        {/*</Picker>*/ }
                        <Text style={styles.pickerItem}>{this.state.city} </Text>
                    </View>
                    <View style={styles.iconView}>
                        <Ionicons name={"search-circle"} size={30}/>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Food that</Text>
                    <Text style={styles.text}>meets your needs</Text>
                </View>

                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.bodyScrollView}
                >
                    <View style={styles.foodView} backgroundColor={"#f9dd7a"}>
                        <Image source={require('../images/5.png')} style={styles.foodImage}/>
                        <Text style={styles.foodText}> Burgers </Text>
                    </View>
                    <View style={styles.foodView} backgroundColor={"#e5e4eb"}>
                        <Image source={require('../images/10.png')} style={styles.foodImage}/>
                        <Text style={styles.foodText}> Burrito </Text>
                    </View>
                    <View style={styles.foodView} backgroundColor={"#e5e4eb"}>
                        <Image source={require('../images/7.png')} style={styles.foodImage}/>
                        <Text style={styles.foodText}> Salads </Text>
                    </View>
                    <View style={styles.foodView} backgroundColor={"#e5e4eb"}>
                        <Image source={require('../images/6.png')} style={styles.foodImage}/>
                        <Text style={styles.foodText}> Pizza </Text>
                    </View>
                </ScrollView>
                <View style={styles.productsTitleContainer}>
                    <View style={styles.productsTitleView}>
                        <Text style={styles.productsTitleText}>New Products</Text>
                    </View>
                    <View style={styles.productsEntypoView}>
                        <Entypo name="dots-three-horizontal" size={25} color="#848385"/>
                    </View>
                </View>
                <View style={styles.productView}>
                    <Product
                    image={require("../images/4.png")}
                    title="SmokeHouse"
                    price="12.99"
                    onPress={() => this.props.navigation.navigate('Detail')}
                    />
                    <Product
                    image={require("../images/9.png")}
                    title="Honey Chilli"
                    price="10.99"
                    marginTop={25}
                    />
                </View>
                <View style={styles.productView}>
                    <Product
                    image={require("../images/6.png")}
                    title="Adios Pizza"
                    price="11.99"
                    />
                    <Product
                    image={require("../images/10.png")}
                    title="Burrito"
                    price="10.99"
                    marginTop={25}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    headerScrollView: {
        backgroundColor: "#FFF"
    },
    headerView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal:20
    },
    headerImageView: {
        width: "10%"
    },
    pickerView: {
        width: "80%",
        alignItems: "center"
    },
    picker: {
        height: 50,
        width: 160
    },
    pickerItem: {
        fontWeight: "bold"
    },
    iconView: {
        width:"10%"
    },
    textView: {
        paddingHorizontal:20,
        marginTop: 50
    },
    text: {
        fontSize:30,
        fontWeight:"bold"
    },
    bodyScrollView: {
        marginTop:40
    },
    foodView: {
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    foodImage: {
        height: 40,
        width:40
    },
    foodText: {
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 10
    },
    productsTitleContainer: {
        alignItems: "center",
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: 40
    },
    productsTitleView: {
        width: "50%"
    },
    productsTitleText: {
        fontSize:22,
        fontWeight: "bold"
    },
    productsEntypoView: {
        width: "50%",
        alignItems: "flex-end"
    },
    productView: {
        flexDirection: "row",
        marginHorizontal: 15,
        marginTop:30
    }
})