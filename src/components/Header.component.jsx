import { Text, View, Pressable, TextInput, StyleSheet } from "react-native";
import {useState} from 'react';
import { Foundation } from '@expo/vector-icons';
import { useQueryContext } from "../modules/Query.context";

export function HeaderComponent(props) {
    const [query, setQuery] = useState('Dubai');
    const context = useQueryContext();

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.appTitle}>ClimaSevero</Text>
            <TextInput 
                style={styles.searchInput} 
                placeholder="Dubai" 
                value={query}
                onChangeText={(text) => setQuery(text)}
            />
            <Pressable onPress={() => {
                context.updateCity(query)
                props?.searchAction();
            }}>
                <Foundation name="magnifying-glass" size={24} color="white" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000088',
        padding: 16,
        width: 'auto',
        alignItems: 'center'
    },
    appTitle: {
        fontSize: 24,
        color: 'white'
    },
    searchInput: {
        fontSize: 16,
        color: 'white',
        marginLeft: 16,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: 200,
        height: 40
    }
})