"use client";

import { useEffect, useRef } from "react";
import Surprise from "../util/confetti";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element
        const audio = new Audio("/background-music.mp3");
        audio.loop = true; // Loop the audio
        audio.volume = 0.5; // Adjust volume if needed
        audioRef.current = audio;

        // Play the audio when the component mounts
        const playAudio = async () => {
            try {
                await audio.play();
            } catch (error) {
                console.error("Autoplay failed:", error);
            }
        };

        playAudio();

        return () => {
            // Pause and clean up audio when the component unmounts
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return (
        <div>
            <div className="homepage-link">
                <Link href="/"> ← Go Back</Link>
            </div>
            <div>
                <section className="success">
                    <Surprise />
                    <Image
                        src="/celebrate.gif"
                        alt="two animals holding hearts and smiling gif"
                        width={570}
                        height={300}
                        className="yay-img"
                        priority
                    />
                    <p id="yay">💖እሽ እንደምትይኝ አውቅ ነበር የኔ ቆንጆ! 💖</p>
                    <p id="yay">🌹እወድሻለሁ!! 🌹</p>
                </section>
            </div>
        </div>
    );
}
