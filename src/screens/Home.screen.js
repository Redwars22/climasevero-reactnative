import { useEffect, useState } from "react";
import { getWeatherData } from "../api/getWeatherData";
import { API_KEY } from "../api/auth";
import { ImageBackground, ScrollView, Text, Pressable } from "react-native";
import { useQuery } from 'react-query';
import { HeaderComponent } from "../components/Header.component";
import { useQueryContext } from "../modules/Query.context";
import { BasicWeatherInfoComponent } from "../components/BasicWeatherInfo.component";
import { getWeatherBGFromString } from "../utils/setBG";
import { DataCardComponent } from "../components/DataCard.component";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export function HomeScreen() {
    const context = useQueryContext();

    const fetchData = () => {
        return getWeatherData(context.city, API_KEY);
    }

    const { data, isLoading, isError, refetch } = useQuery('myData', fetchData);

    const additionalInfo = [
        {
            data: 'humidity',
            icon: <FontAwesome5 name="tint" size={34} color="royalblue" />,
            description: `${data?.main?.humidity}%`
        },
        {
            data: 'visibility',
            icon: <MaterialCommunityIcons name="weather-fog" size={34} color="lightgrey" />,
            description: `${data?.visibility}m`
        },
        {
            data: 'wind',
            icon: <Fontisto name="wind" size={34} color="grey" />,
            description: `${data?.wind?.speed}m/s`
        },
        {
            data: 'pressure',
            icon: <MaterialCommunityIcons name="windsock" size={34} color="red" />,
            description: `${data?.main?.pressure}hPa`
        }
    ]
    
    const height = Dimensions.get('window').height;

    return (
        <>
            <HeaderComponent searchAction={() => {
                refetch()
            }} />
            <>{isLoading ? <>
                <Text>Carregando...</Text>
            </> : data ? <>
                <ImageBackground style={{
                    height: height - ((height * 28)/100)
                }} source={{
                    uri: getWeatherBGFromString(data?.weather[0].main)
                }}>
                    <BasicWeatherInfoComponent
                        city={data?.name}
                        temperature={data?.main?.temp?.toFixed(1)}
                        min={data?.main?.temp_min?.toFixed(1)}
                        max={data?.main?.temp_max?.toFixed(1)}
                        description={data?.weather[0]?.description}
                        feelsLike={data?.main?.feels_like.toFixed(1)}
                        icon={data?.weather[0]?.icon}
                    />
                </ImageBackground>
                <ScrollView horizontal={true}>
                    {additionalInfo.map((item, index) =>
                        <DataCardComponent value={item?.description} icon={item?.icon} />
                    )}
                </ScrollView>
            </> : null}</>
        </>)
}