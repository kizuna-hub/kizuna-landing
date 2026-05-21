"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        alt: "Thực chiến",
        role: "Thực chiến"
    },
    {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        alt: "Tầm nhìn",
        role: "Tầm nhìn"
    },
    {
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        alt: "Kiến tạo",
        role: "Kiến tạo"
    }
];

export const PolaroidStack = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative mx-auto flex h-[550px] w-full max-w-5xl flex-col items-center justify-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative flex h-[400px] w-full items-center justify-center">
                {IMAGES.map((img, index) => {
                    // --- TRẠNG THÁI CHỒNG LÊN NHAU (STACKED - HÌNH CHỮ V) ---
                    // Ảnh Trái (-12 độ), Ảnh Giữa (0 độ), Ảnh Phải (12 độ)
                    const stackedRotate = index === 0 ? -12 : index === 1 ? 0 : 12;
                    // Trái và Phải đè lên trên (z-index: 10), Giữa nằm dưới cùng (z-index: 0)
                    const stackedZIndex = index === 1 ? 0 : 10;
                    // Tách giãn 2 ảnh ngoài ra 40px để không đè bẹp ảnh giữa
                    const stackedX = index === 0 ? -40 : index === 1 ? 0 : 40;
                    // Đẩy ảnh giữa lên cao một chút để ló đầu ra
                    const stackedY = index === 1 ? -30 : 20;

                    // --- TRẠNG THÁI DÀN HÀNG NGANG KHI HOVER (SPREAD) ---
                    const spreadX = index === 0 ? -280 : index === 1 ? 0 : 280;
                    const spreadRotate = index === 0 ? -4 : index === 1 ? 0 : 4;
                    const spreadY = index === 1 ? -15 : 0;

                    return (
                        <motion.div
                            key={index}
                            animate={{
                                x: isHovered ? spreadX : stackedX,
                                y: isHovered ? spreadY : stackedY,
                                rotate: isHovered ? spreadRotate : stackedRotate,
                                scale: isHovered && index === 1 ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute h-[340px] w-[240px] md:h-[400px] md:w-[280px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] cursor-pointer"
                            style={{ zIndex: stackedZIndex }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-full w-full object-cover transition-all duration-500 grayscale hover:grayscale-0"
                            />
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-12 h-16 w-full flex justify-center">
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            transition={{ duration: 0.3 }} // Animation chữ cũng nhanh gọn dứt khoát
                            className="flex gap-24 md:gap-52 text-center"
                        >
                            {IMAGES.map((img, i) => (
                                <span key={i} className="font-serif text-xl italic text-white tracking-wide">
                                    {img.role}
                                </span>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};