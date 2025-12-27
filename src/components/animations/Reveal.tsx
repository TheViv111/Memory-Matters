import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    threshold?: number;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.5,
    direction = 'up',
    className = "",
    threshold = 0.2
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    const getHiddenVariant = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 50 };
            case 'down': return { opacity: 0, y: -50 };
            case 'left': return { opacity: 0, x: 50 };
            case 'right': return { opacity: 0, x: -50 };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: 75 };
        }
    };

    const getVisibleVariant = () => {
        return { opacity: 1, x: 0, y: 0 };
    };

    return (
        <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }} className={className}>
            <motion.div
                variants={{
                    hidden: getHiddenVariant(),
                    visible: getVisibleVariant(),
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// Stagger container for lists
export const RevealList = ({
    children,
    delay = 0,
    stagger = 0.1,
    className = ""
}: {
    children: React.ReactNode,
    delay?: number,
    stagger?: number,
    className?: string
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: stagger,
                        delayChildren: delay
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

export const RevealItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
            }}
        >
            {children}
        </motion.div>
    );
};
