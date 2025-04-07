import { View } from 'react-native'
import React from 'react'
import { Image, type ImageSource } from 'expo-image'

type Props = {
    imagemSize: number;
    stickerSource: ImageSource;
}

export default function EmojiSticker({ imagemSize, stickerSource }: Props) {
    return (
        <View style={{ top: -350 }}>
            <Image source={stickerSource} style={{ width: imagemSize, height: imagemSize }} />

        </View>
    )
}