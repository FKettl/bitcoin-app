import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainContent:{
        width:"95%",
        height:"auto",
        backgroundColor:"#000",
        marginLeft:"3%",
        marginBottom:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10
    },
    logBitcoin:{
        width:40,
        height:40,
        marginLeft:2,
        
    },
    contextLeft:{
        width:"36%",
        height:"100%",
        alignItems:"flex-start",
        
    },
    dayCotation:{
        fontSize:16,
        paddingLeft:8,
        color:"#fff",
        fontWeight:"bold",
    },
    contextRight:{
        alignItems:"flex-end",
        width:"60%",
    },
    price:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
        paddingRight:2,
    },
    boxLogo:{
        flexDirection:"row",
        alignItems:"center",
    }

});

export default styles