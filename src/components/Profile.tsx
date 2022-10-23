import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const Profile = () => {
    return (
        <ScrollView>
            <View style={styles.box1}>
                <View>
                    <Image
                        style={styles.image}
                        source={require("../Img/profile.jpg")} />
                </View>
                <View style={styles.boxEdit}>
                    <Text style={styles.textEdit}>
                        Edit Profile
                    </Text>
                </View>
            </View>

            <View style={styles.box3}>
                <Text style={styles.textMichelle}>
                    Michelle Luna
                </Text>
            </View>
            <View style={styles.box4}>
                <Text style={styles.textMichelle2}>
                    Hello wordl i'm Michelle Luna, i'm from
                    Nicaragua, i love cooking so much!
                </Text>
            </View>

            <View style={styles.boxSocialMedia}>
                <Text style={styles.textMichelle2}>
                    Recipe
                </Text>
                <Text style={styles.textMichelle2}>
                    Videos
                </Text>
                <Text style={styles.textMichelle2}>
                    Followers
                </Text>
                <Text style={styles.textMichelle2}>
                    Following
                </Text>
            </View>

            <View style={styles.boxSocialMedia}>
                <Text style={styles.numberSocialMedia}>
                    3
                </Text>
                <Text style={styles.numberSocialMedia}>
                    13
                </Text>
                <Text style={styles.numberSocialMedia}>
                    14K
                </Text>
                <Text style={styles.numberSocialMedia}>
                    120
                </Text>
            </View>

            <View style={styles.line}></View>
            <View style={styles.boxVideoRecipe}>
                <View style={styles.boxVideo}>
                    <Text style={styles.textVideo}>
                        Video
                    </Text>
                </View>

                <View style={styles.boxVideoRecipe}>
                </View>
                <View style={styles.boxRecipe}>
                    <Text style={styles.textRecipe}>
                        Recipe
                    </Text>
                </View>
            </View>

            <View>
                <Image
                    style={styles.foodImage}
                    source={require("../Img/espagueti.jpg")} />
                <View style={styles.boxFood_star} >
                    <Text style={styles.textStar}>
                        <AntDesign name="star" size={24} color="white" /> 5,0
                    </Text>
                </View>
                <View style={styles.boxMore}>
                    <Feather name="more-horizontal" size={30} color="#FF464B" />
                </View>
                <Text style={styles.textInside}>
                    How to make italian
                    Spaghetti at home
                </Text>
                <Text style={styles.textInside2}>
                    12 ingredients | 40 min
                </Text>
            </View>
        
            <View>
                <Image
                    style={styles.foodImage}
                    source={require("../Img/chicken.jpg")} />

                <View style={styles.boxFood_star} >
                    <Text style={styles.textStar}>
                        <AntDesign name="star" size={24} color="white" /> 4,7
                    </Text>
                </View>
                <View style={styles.boxMore}>
                    <Feather name="more-horizontal" size={30} color="#FF464B" />
                </View>
                <Text style={styles.textInside}>
                    Simple chicken meal
                    prep dishes
                </Text>
                <Text style={styles.textInside2}>
                    12 ingredients | 40 min
                </Text>
            </View>

            <View>
                <Image
                    style={styles.foodImage}
                    source={require("../Img/japanese.jpg")} />

                <View style={styles.boxFood_star} >
                    <Text style={styles.textStar}>
                        <AntDesign name="star" size={24} color="white" /> 4,7
                    </Text>
                </View>
                <View style={styles.boxMore}>
                    <Feather name="more-horizontal" size={30} color="#FF464B" />
                </View>
                <Text style={styles.textInside}>
                    Japanese fried rice
                </Text>
                <Text style={styles.textInside2}>
                    12 ingredients | 40 min
                </Text>
            </View>
        </ScrollView>
    )
}
export default Profile;

const styles = StyleSheet.create({
    box1: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 26,
    },
    box3: {   
        marginHorizontal: 26,
    },
    box4: {
        marginHorizontal: 26,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    boxEdit: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#FF464B",
        width: 110,
    },
    textEdit: {
        color: '#FF464B',
        fontSize: 18,
        justifyContent: 'center',
        textAlign:'center',
    },
    textMichelle: {
        color: "black",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold",
    },
    textMichelle2: {
        color: "#c6c6c6",
        fontSize: 17,
        marginTop: 10,
        fontWeight: "bold",
    },
    boxSocialMedia: {
        flexDirection: 'row',
        marginHorizontal: 26,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    numberSocialMedia: {
        marginHorizontal: 26,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: "bold",
    },
    line: {
        marginTop: 15,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#c6c6c6",
    },
    boxVideoRecipe: {
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 30,
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    boxVideo: {
        marginHorizontal: 30,
        paddingLeft: 20,
        padding: 5,
        textAlign: 'center',
        justifyContent: 'center',
        width: "30%",

    },
    textVideo: {
        color: '#FF464B',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 20,

    },
    boxRecipe: {
        backgroundColor: '#FF464B',
        borderRadius: 8,
        width: "50%",
        height: "100%",
        marginLeft: 80,
        marginHorizontal: 30,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    textRecipe: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        top: 3,

    },
    boxFood: {
        flexDirection: "row",
        marginTop: 90,
        borderRadius: 10,
    },
    boxFood_star: {
        backgroundColor: 'rgba(52,52,52,0.4)',
        flexDirection: "row",
        width: 60,
        marginHorizontal: 35,
        borderRadius: 10,
        justifyContent: 'space-between',
        textAlign: 'center',
        position: 'absolute',
        marginTop: 40,

    },
    textStar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    foodImage: {
        borderRadius: 10,
        width: "88%",
        height: 180,
        marginHorizontal: 26,
        marginTop: 20,
    },
    boxMore: {
        backgroundColor: 'white',
        flexDirection: "row",
        borderRadius: 100,
        justifyContent: 'space-around',
        textAlign: 'center',
        position: 'absolute',
        top: 37,
        marginStart: 330,
    },
    textInside:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: "30%",
        width: "45%",
        marginLeft: 35,
        position:'absolute',
    },
    textInside2:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: "42%",
        width: "45%",
        marginLeft: 35,
        position:'absolute',
    },
});