import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    SafeAreaView,
    Animated,
    TouchableOpacity
} from "react-native";


import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get('window');
import RestaurantInfo from "./components/RestaurantMenu/RestaurantInfo";
import MenuItem from "./components/RestaurantMenu/MenuItem";
class RestaurantMenu extends Component {

    constructor(props) {
        super(props);
        this.getBlockComponent = this.getBlockComponent.bind(this)
        this.state = {
            starCount: 4.5,
            imageUri: props.navigation.state.params.imageUri,
            name: props.navigation.state.params.name,
            quote: props.navigation.state.params.quote,
            category: props.navigation.state.params.category,
            time: props.navigation.state.params.time,
            fee: props.navigation.state.params.fee,
            rating: props.navigation.state.params.rating,
            numRatings: props.navigation.state.params.numRatings,
            isHidden: false,
            restaurantId: props.navigation.state.params.restaurantId,
            blocks: [],
            items: [],


        };
    }
    componentDidMount() {
        this.getItems();
    }
    getBlockComponent(block) {

        //return <Localite key={block.id}  />
        return <MenuItem key={block._id} navigation={this.props.navigation} title={block.title}
            price={block.price} restaurantName={this.state.name} {...block}
        />
    }
    viewCart() {
        this.props.navigation.navigate('Cart', {
            restaurantName: this.state.name,
        });
    }

    async getItems() {
        console.log("____");
        console.log(this.state.restaurantId);
        console.log("--------");
        fetch('http://localhost:5000/items?restaurantId=' + this.state.restaurantId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseJSON) => {
            if (responseJSON == null) console.log("NULL!!!!!")
            var items = responseJSON;
            console.log(items);
            this.setState({ items: items }, () => this.setState({ blocks: items }));
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        return (
            <SafeAreaView >
                <ScrollView>
                    <RestaurantInfo imageUri={this.state.imageUri} name={this.state.name} quote={this.state.quote}
                        category={this.state.category} time={this.state.time} fee={this.state.fee}
                        rating={this.state.rating} numRatings={this.state.numRatings} />
                    {this.state.blocks.map(block => this.getBlockComponent(block))}
                    <View style={{ height: 20, marginBottom: 40 }} />
                </ScrollView>
                <TouchableOpacity style={{
                    backgroundColor: '#ff574d', width: (this.state.isHidden) ? 0 : width - 48,
                    height: (this.state.isHidden) ? 0 : 45, justifyContent: 'center', borderRadius: 30, alignItems: 'center',
                    alignSelf: "center", marginTop: 50, bottom: 100
                }}
                    onPress={() => this.viewCart()}
                >

                    <Text style={{ color: '#F5F8FB', fontSize: 14, fontWeight: 'bold' }}> View Cart </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
export default RestaurantMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

/*<Text style={{
                    color: '#3f3f3f',
                    fontSize: 13,
                    fontWeight: '300', marginTop: 2, marginLeft: 20, marginBottom: 2
                }} >
                    ${this.state.fee} delivery
                            </Text>*/