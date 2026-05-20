"use client";

import { motion, type MotionValue } from "framer-motion";
import { type GraphEdge, graphNodes, getNodeById, buildEdgePath } from "./data";

interface GraphEdgePathProps {
    edge: GraphEdge;
    lineOpacity: MotionValue<number>;
    linePathLength: MotionValue<number>;
}

export const GraphEdgePath = ({ edge, lineOpacity, linePathLength }: GraphEdgePathProps) => {
    const from = getNodeById(graphNodes, edge.from);
    const to = getNodeById(graphNodes, edge.to);

    // Bouncer Pattern: Early Return
    if (!from || !to) return null;

    return (
        <motion.path
            aria-hidden="true"
            d={buildEdgePath(from, to, edge.curve)}
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="7 9"
            className="will-change-auto"
            // Áp trực tiếp hai MotionValue truyền từ file Index chính vào style
            style={{ opacity: lineOpacity, pathLength: linePathLength }}
        />
    );
};