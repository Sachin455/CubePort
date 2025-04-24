"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

export const AnimatedCube = () => {
    const ref = useRef(null)

    useAnimationFrame((t) => {
        if (!ref.current) return
        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="perspective-[800px] w-[200px] h-[200px] mx-auto lg:mx-0">
            <div
                ref={ref}
                className="w-full h-full relative [transform-style:preserve-3d]"
            >
                {["front", "left", "right", "top", "bottom", "back"].map((side) => (
                    <div
                        key={side}
                        className={`absolute w-full h-full rounded-xl opacity-70 ${side} glow-cube`}
                    />
                ))}
            </div>

            <style>{`
                .front { transform: rotateY(0deg) translateZ(100px); }
                .right { transform: rotateY(90deg) translateZ(100px); }
                .back { transform: rotateY(180deg) translateZ(100px); }
                .left { transform: rotateY(-90deg) translateZ(100px); }
                .top { transform: rotateX(90deg) translateZ(100px); }
                .bottom { transform: rotateX(-90deg) translateZ(100px); }

                .glow-cube {
                    background: radial-gradient(circle at center, rgba(0,163,255,0.2), rgba(0,163,255,0.1), transparent);
                    box-shadow: 0 0 20px rgba(0, 163, 255, 0.25), 0 0 40px rgba(0, 163, 255, 0.15);
                    border: 1px solid rgba(0,163,255,0.15);
                }
            `}</style>
        </div>
    )
}
