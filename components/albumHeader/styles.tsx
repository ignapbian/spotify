import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20
    },
    image:{
        width:200,
        height:200,
        margin:15
    },
    name:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },
    creatorContainer:{
        flexDirection:'row',
        margin:10
    },
    creator:{
        color:'lightgrey',
        margin:5,
        fontSize:20
    },
    likes:{
        color:'lightgrey',
        margin:5,
        fontSize:20
    },
    button:{
        backgroundColor:'#1CD05D',
        height:60,
        width:175,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }

})
export default styles;