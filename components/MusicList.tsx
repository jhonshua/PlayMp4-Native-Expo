import { MusicType } from '@/data/musciTypes';
import React from 'react';
import { View, Text} from "react-native";

interface Props{
    musicData: MusicType[];
}

const MusicList = ({ musicData }: Props) => {
    return (
        <View className='flex h-screen items-center justify-center'>
            <Text className='text-3xl font-semibold'>this is MusicList</Text>
        </View>
    );
}

export default MusicList;
