import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:79,
        width:'100%',
        backgroundColor:'#131313',
        borderWidth:2,
    },
    image:{
        width:75,
        height:75,
        marginRight:10,
    },
    artist:{
        color:'lightgrey',
        fontSize:18,
    },
    title:{
        color:'white',
        fontSize:18,
        fontWeight:"bold",
        margin:10,
    },
    rightContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:"center",

    },
    iconsContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:100,
        justifyContent:'space-around'
    },
    progress:{
        height:7,
        backgroundColor:'#bcbcbc'
    },
    row:{
        flexDirection:'row',
    }
})
export default styles;