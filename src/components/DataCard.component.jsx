import { Text, View } from "react-native";

export function DataCardComponent(props){
    return(
        <View style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 16,
            width: 100,
            alignItems: 'center',
            margin: 16,
            height: 125
        }}>
            <>{props?.icon}</>
            <Text style={{
                fontSize: 18,
                color: 'grey',
                marginTop: 10
            }}>{props?.value}</Text>
        </View>
    )
}