import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";


const { height, width } = Dimensions.get('window');
import StarRating from 'react-native-star-rating';


class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5
        };
    }

    onNext() {
        this.props.navigation.navigate('RestaurantMenu', {
            restaurantId: this.props.email,
            imageUri: this.props.imageUri,
            name: this.props.name,
            quote: this.props.quote,
            category: this.props.category,
            time: this.props.time,
            fee: this.props.fee,
            rating: this.props.rating,
            numRatings: this.props.numRatings

        });
        /*
        console.log(this.props.email);
        this.props.navigation.navigate('TourGuideDetail', {
            email: this.props.email,
            name: this.props.name,
            imageUri: this.props.imageUri,
            iWillShowYou: this.props.iWillShowYou,
            aboutMe: this.props.aboutMe,
            hourlyRate: this.props.hourlyRate,
            numRatings: this.props.numRatings
        })
       */
    }

    render() {
        return (

            <TouchableOpacity onPress={() => this.onNext()}>
                <View style={{
                    width: width - 40, height: 150,
                    marginTop: 20, flexDirection: 'row',
                    borderWidth: .5, borderColor: '#dddddd',
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: '#dddddd',
                    shadowOpacity: 0.2

                }}>
                    <Image
                        style={{
                            flex: 3, height: null,
                            width: null, resizeMode: 'cover',
                            borderWidth: 0,
                            overflow: 'hidden'
                        }}
                        source={this.props.imageUri}
                    />
                    <View style={{ flex: 4, flexDirection: 'column' }}>
                        <Text style={{
                            flex: 2,
                            fontSize: 24,
                            color: '#3f3f3f',
                            fontWeight: 'bold', marginTop: 5,
                            marginLeft: 20
                        }}>
                            {this.props.name}
                        </Text>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={{
                                color: '#3f3f3f',
                                fontSize: 16,
                                fontWeight: '500', marginTop: 5,
                                marginLeft: 20
                            }} >
                                {this.props.quote} .
                        </Text>
                            <Text style={{
                                color: '#3f3f3f',
                                fontSize: 16,
                                fontWeight: '500', marginTop: 5
                            }} >
                                {" " + this.props.category}
                            </Text>
                        </View>
                        <Text style={{
                            color: '#3f3f3f',
                            fontSize: 16,
                            fontWeight: '300', marginTop: 5,
                            marginLeft: 20
                        }} >
                            {this.props.time} mins away
                        </Text>
                        <Text style={{
                            color: '#3f3f3f',
                            fontSize: 16,
                            fontWeight: '300', marginTop: 5, marginLeft: 20, marginBottom: 10
                        }} >
                            ${this.props.fee} delivery
                            </Text>



                        <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                            <Text style={{ color: '#ff574d' }}> {this.props.rating} </Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.props.rating}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                resizeMode="contain"
                                fullStarColor="#ff574d"
                                halfStarColor="#ff574d"
                                containerStyle={{ height: 20, width: 50, marginTop: 1 }}
                                starSize={13}
                            />
                            <Text style={{ marginLeft: 10, color: '#353c59' }}> {(this.props.numRatings == 0) ? '' : this.props.numRatings} </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Restaurant;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});