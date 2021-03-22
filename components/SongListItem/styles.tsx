import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:15,
    },
    rightContainer:{
        justifyContent:'space-around',
        marginLeft:15
    },
    image:{
        width:75,
        height:75
    },
    artist:{
        color:'lightgrey',
        fontSize:20,
    },
    title:{
        color:'white',
        fontSize:24,
    }
})
export default styles;