import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Image } from 'react-native';

export function BasicWeatherInfoComponent(props) {
    return (
        <View style={styles.weatherCard}>
            <View>
                <Text style={styles.temperature}>{props?.temperature}º</Text>
                <Text style={styles.bigText}>{props?.description}</Text>
                <Text style={styles.bigText}>
                    {props?.city}
                    <Ionicons name="ios-location-sharp" size={24} color="white" />
                </Text>
                <Text style={{
                    color: 'white'
                }}>{props?.max}º/{props?.min}º - Sensação térmica de {props?.feelsLike}º</Text>
            </View>
            <Image style={{
                width: 150,
                height: 150
            }} source={{ uri: `https://openweathermap.org/img/wn/${props?.icon}@2x.png` }} />
        </View>
    )
}

const styles = StyleSheet.create({
    temperature: {
        fontSize: 66,
        color: 'white'
    },
    bigText: {
        fontSize: 24,
        color: 'white'
    },
    weatherCard: {
        flexDirection: 'row',
        padding: 16,
    }
})