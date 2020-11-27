import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
const { height, width } = Dimensions.get('window');
import StarRating from 'react-native-star-rating';
class RestaurantInfo extends Component {
    render() {
        return (
            <View >
                <Image
                    style={{
                        flex: 3,
                        height: width,
                        width: width, resizeMode: 'cover',
                        borderWidth: 0,
                        overflow: 'hidden'
                    }}
                    resizeMethod="resize"
                    source={this.props.imageUri}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{
                        flex: 2,
                        fontSize: 24,
                        color: '#3f3f3f',
                        fontWeight: 'bold', marginTop: 5,
                        marginLeft: 20
                    }}>
                        {this.props.name}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            color: '#3f3f3f',
                            fontSize: 13,
                            fontWeight: '500', marginTop: 2,
                            marginLeft: 20
                        }} >
                            {this.props.quote} .
                        </Text>
                        <Text style={{
                            color: '#3f3f3f',
                            fontSize: 13,
                            fontWeight: '500', marginTop: 2
                        }} >
                            {" " + this.props.category}
                        </Text>
                    </View>
                    <Text style={{
                        color: '#3f3f3f',
                        fontSize: 13,
                        fontWeight: '300', marginTop: 2,
                        marginLeft: 20
                    }} >
                        {this.props.time} mins away
                        </Text>
                    <View style={{ marginLeft: 17, flexDirection: 'row' }}>
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
        );
    }
}
export default RestaurantInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});