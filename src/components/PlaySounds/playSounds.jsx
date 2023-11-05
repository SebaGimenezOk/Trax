import React, { useState, useEffect } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import styles from './playSounds.style';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';



function PlaySounds({audioURL}) {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            { uri: audioURL }
        );
        setSound(sound);
        await sound.playAsync();
        setIsPlaying(true);
    }

    const togglePlayPause = async () => {
        if (sound) {
            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const adjustVolume = (newVolume) => {
        if (sound) {
            sound.setVolumeAsync(newVolume);
            setVolume(newVolume);
        }
    };

    useEffect(() => {
        playSound();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    return (
        <View style={styles.container}>

{/* 
            <Text>estas escuchando: </Text> */}
            <Pressable title={isPlaying ? 'Pausa' : 'Reproducir'} onPress={togglePlayPause} />

            <Pressable>
                <AntDesign
                    name={isPlaying ? 'pausecircleo' : 'play'}
                    size={25}
                    onPress={togglePlayPause}
                    style={styles.boton}
                />
            </Pressable>

        </View>
    );
}
PlaySounds.propTypes = {
    audioURL: PropTypes.string.isRequired,
};

export default PlaySounds;
