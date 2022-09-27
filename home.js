import * as React from 'react';
import { Text, View, Image, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: [
                {
                    name: 'Smart watch 1',
                    price: 200,
                    image: require('./img/3.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 2',
                    price: 750,
                    image: require('./img/4.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 3',
                    price: 300,
                    image: require('./img/5.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 4',
                    price: 845,
                    image: require('./img/6.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 5',
                    price: 450,
                    image: require('./img/7.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 6',
                    price: 500,
                    image: require('./img/8.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 7',
                    price: 330,
                    image: require('./img/9.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 8',
                    price: 620,
                    image: require('./img/10.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 9',
                    price: 250,
                    image: require('./img/11.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 10',
                    price: 900,
                    image: require('./img/12.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 11',
                    price: 570,
                    image: require('./img/13.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 12',
                    price: 950,
                    image: require('./img/14.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 13',
                    price: 810,
                    image: require('./img/15.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 14',
                    price: 1000,
                    image: require('./img/16.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 15',
                    price: 1200,
                    image: require('./img/17.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 16',
                    price: 770,
                    image: require('./img/18.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 17',
                    price: 600,
                    image: require('./img/19.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 18',
                    price: 590,
                    image: require('./img/20.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 19',
                    price: 300,
                    image: require('./img/21.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
                {
                    name: 'Smart watch 20',
                    price: 450,
                    image: require('./img/22.png'),
                    love: 'hearto',
                    like: false,
                    love_color: '#000'
                },
            ],

            favorites_arr: [],
            search_value: '',

        }
    }

    likeFun(index) {

        var new_index = index

        let fav_arr = this.state.favorites_arr
        let fav_name = this.state.arr[index].name
        let fav_image = this.state.arr[index].image
        let fav_price = this.state.arr[index].price

        let fav_object = {
            name: fav_name,
            price: fav_price,
            image: fav_image,
        }

        let my_arr = this.state.arr
        let edit_item = my_arr[new_index]

        edit_item.like = !edit_item.like

        if (edit_item.like == true) {
            edit_item.love = 'heart'
            edit_item.love_color = '#f00'
            fav_arr.push(fav_object)
        }
        else {
            edit_item.love = 'hearto'
            edit_item.love_color = '#000'
        }

        my_arr[new_index] = edit_item


        this.setState({
            arr: my_arr,

            favorites_arr: fav_arr,
        })
    }

    render() {

        const myFilter = this.state.arr.filter((watch) => {
            return watch.name.indexOf(this.state.search_value) >= 0
        })

        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor={"#0eff00"} />

                <Appbar.Header style={{ backgroundColor: '#0eff00', height: 90, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style=
                            {{
                                backgroundColor: '#fff',
                                width: 250,
                                height: 40,
                                borderRadius: 5,
                                padding: 5,
                                color: "#000",
                                marginLeft: 10
                            }}
                            placeholder='search...'
                            placeholderTextColor={'gray'}
                            value={this.state.search_value}
                            onChangeText={(value) => {
                                this.setState({ search_value: value })
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                            }}
                            onPress={() => {
                                this.setState({ search_value: '' })
                            }}
                        >
                            <AntDesign
                                name={this.state.search_value == '' ? 'search1' : 'close'}
                                size={18}
                                color={'black'}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* <TouchableOpacity>
                        <FontAwesome name='user' size={30} color={'#fff'} />
                    </TouchableOpacity> */}

                </Appbar.Header>


                <View style={{ backgroundColor: "#d8f1c7", flex: 1, }}>

                    <ScrollView>

                        <View
                            style=
                            {{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginBottom: '7%'
                            }}
                        >
                            {myFilter.map((item, index) => {
                                return (

                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            this.props.navigation.navigate("Item", {
                                                image: item.image,
                                                name: item.name,
                                                price: item.price,
                                                favorites_arr: this.state.favorites_arr
                                            })
                                        }}

                                        style=
                                        {{
                                            width: '42%',
                                            height: 230,
                                            backgroundColor: '#fff',
                                            marginLeft: 20,
                                            borderRadius: 10,
                                            marginTop: '7%',
                                            padding: 10,

                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.23,
                                            shadowRadius: 2.62,

                                            elevation: 4,
                                        }}

                                        activeOpacity={.6}
                                    >
                                        <Image
                                            source={item.image}
                                            resizeMode='stretch'
                                            style={{ height: 130, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                        />

                                        <TouchableOpacity
                                            style={{ position: 'absolute', right: 10, top: 10 }}
                                            onPress={() => {
                                                this.likeFun(index)
                                            }}
                                        >
                                            <AntDesign
                                                name={item.love}
                                                size={20}
                                                color={item.love_color}
                                            />
                                        </TouchableOpacity>

                                        <View>

                                            <Text
                                                style={{ marginTop: 5, color: '#f00', marginTop: 20, fontWeight: 'bold', fontSize: 17 }}>
                                                ${item.price}
                                            </Text>

                                            <Text
                                                style={{ color: "#000", fontStyle: 'italic' }}>
                                                {item.name}
                                            </Text>

                                        </View>

                                    </TouchableOpacity>

                                )
                            })}
                        </View>

                    </ScrollView>

                    <View
                        style={{
                            width: '100%',
                            height: 60,
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            paddingHorizontal: 20,
                        }}>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Home")
                            }}
                        >
                            <MaterialCommunityIcons name='home' size={30} color={'#45b401'} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Cart", {
                                    favorites_arr: this.state.favorites_arr,
                                })
                            }}
                            style=
                            {{
                                backgroundColor: '#45b401',
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: -40,
                                marginHorizontal: 20
                            }}
                        >
                            <MaterialCommunityIcons name='shopping-outline' size={25} color={'#fff'} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Favorites", {
                                    favorites_arr: this.state.favorites_arr,
                                })
                            }}
                        >
                            <AntDesign name='hearto' size={25} color={'#000'} />
                        </TouchableOpacity>

                    </View>

                </View>
            </>
        )
    }
}