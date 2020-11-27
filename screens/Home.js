import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from "react-native";

import Category from './components/home/Category'
import Restaurant from "./components/home/Restaurant";

class Home extends Component {
    constructor() {
        super()
        this.getBlockComponent = this.getBlockComponent.bind(this)

    }
    componentDidMount() {
        this.getRestaurants();
        global.cart = [];
    }
    state = {

        modalVisible: false,
        blocks: [],
        restaurants: [],
        categoryText: 'Recomended',
        text: '',
        i: 0
    };
    getBlockComponent(block) {

        //return <Localite key={block.id}  />
        return <Restaurant key={block.email} email={block.email} navigation={this.props.navigation} imageUri={{ uri: block.imageUrl }}
            name={block.name} quote={block.quote} category={block.category} time={block.time} fee="2.99" rating={(block.numRatings == 0) ? '' : block.totalScore / block.numRatings} numRatings={(block.numRatings == 0) ? ' ' : block.numRatings} {...block}
        />
    }
    async getRestaurants() {

        fetch('http://localhost:5000/restaurants', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseJSON) => {
            if (responseJSON == null) console.log("NULL!!!!!")
            var restaurants = responseJSON;
            console.log(restaurants);
            this.setState({ restaurants: restaurants }, () => this.setState({ blocks: restaurants }));
        }).catch((error) => {
            console.error(error);
        });
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>
                <ScrollView
                    scrollEventThrottle={16}
                //onScroll={Animated.event(
                //  [
                //     { nativeEvent: { contentOffset: { y: this.scrollY } } }
                // ]
                // )}
                >
                    <View style={{
                        flex: 1,
                        paddingTop: 20
                    }}>

                        <Text style={{
                            fontSize: 24, fontWeight: '700',
                            paddingHorizontal: 20, color: '#3f3f3f', paddingVertical: 20
                        }}>
                            Explore by category
                            </Text>

                        <View style={{ height: 200, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category imageUri={require('./../assets/fast_food.jpg')} name="Fast Food" />
                                <Category imageUri={require('./../assets/desserts.jpg')} name="Desert" />
                                <Category imageUri={require('./../assets/mexican.png')} name="Mexican" />
                                <Category imageUri={require('./../assets/indian.jpg')} name="Indian" />
                                <Category imageUri={require('./../assets/asian.jpeg')} name="Asian" />
                                <Category imageUri={require('./../assets/sandwich.jpg')} name="Sandwich" />
                                <Category imageUri={require('./../assets/pizza.jpg')} name="Pizza" />

                            </ScrollView>
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#3f3f3f' }}>
                                Recomended restaurants
                                </Text>
                            {this.state.blocks.map(block => this.getBlockComponent(block))}
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView >

        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});