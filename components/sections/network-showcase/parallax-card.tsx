"use client";

import { motion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { NetworkCard } from "./network-card";
import type { NetworkPerson } from "./data";

export interface ParallaxNetworkCardProps {
    person: NetworkPerson;
    y: MotionValue<number> | number;
    shouldReduceMotion: boolean;
}

export const ParallaxNetworkCard = ({ person, y, shouldReduceMotion }: ParallaxNetworkCardProps) => {
    return (
        <motion.div style={{ y }} className={cn("absolute z-20", person.positionClassName)}>
            <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -15, 0] }}
                transition={
                    shouldReduceMotion
                        ? undefined
                        : {
                            repeat: Infinity,
                            duration: person.floatDuration,
                            delay: person.floatDelay,
                            ease: "easeInOut",
                        }
                }
                className="will-change-transform"
            >
                <NetworkCard person={person} />
            </motion.div>
        </motion.div>
    );
};