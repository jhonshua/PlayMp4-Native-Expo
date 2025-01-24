import React,{useState, useEffect} from "react";
import { View, Text} from "react-native";
import MusicList from "./MusicList";
import Playing from "./Playing";
import {LinearGradient} from 'expo-linear-gradient'
import { SafeAreaView } from "react-native-safe-area-context";
import { musicData } from "@/data/music";


const Layout = () => {

    const[tabSelected, setTabSelected] = useState < "list" | "playing" > ("list");

    return(
        <>
            <LinearGradient
            colors={["#212528", "#111315"]}
            >
                <SafeAreaView>
                  {tabSelected === "list" ? <MusicList musicData={musicData}/> : <Playing/>}   
                </SafeAreaView> 
            </LinearGradient>  
        </>
    );
};

export default Layout;