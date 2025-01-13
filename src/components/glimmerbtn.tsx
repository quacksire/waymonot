import { motion } from "motion/react"
import { ButtonHTMLAttributes } from "react"

interface GlimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function GlimmerButton({ children, className, ...props }: GlimmerButtonProps) {
    return (
        <motion.button
            className={`relative w-full bg-[#0066FF] hover:bg-blue-600 text-white py-6 px-8 rounded-[32px] text-lg font-medium tracking-[0.2em] shadow-[0_8px_16px_rgba(0,102,255,0.25)] transition-all overflow-hidden ${className}`}
            {...props}
        >
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.1) 2px,
            rgba(255, 255, 255, 0.1) 4px
          )`,
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "0px -100px"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                }}
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    )
}

