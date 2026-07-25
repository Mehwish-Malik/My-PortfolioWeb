// Animation utilities with accessibility support
// Respects prefers-reduced-motion for accessibility

export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Standard animation durations (200-500ms for premium feel)
export const durations = {
  fast: 0.2,
  medium: 0.3,
  normal: 0.4,
  slow: 0.5,
} as const;

// Fade in + slide up animation (scroll-triggered sections)
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: shouldReduceMotion() ? 0 : 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: shouldReduceMotion() ? 0.01 : durations.normal,
    delay: shouldReduceMotion() ? 0 : delay
  },
  viewport: { once: true },
});

// Fade in animation (no movement)
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: shouldReduceMotion() ? 0.01 : durations.normal,
    delay: shouldReduceMotion() ? 0 : delay
  },
});

// Stagger container for grouped items
export const staggerContainer = (staggerDelay = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: shouldReduceMotion() ? 0 : staggerDelay,
    },
  },
});

// Stagger item (child of stagger container)
export const staggerItem = {
  hidden: { opacity: 0, y: shouldReduceMotion() ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: shouldReduceMotion() ? 0.01 : durations.medium },
  },
};

// Scale up on hover (buttons, cards)
export const hoverScale = (scale = 1.05) => ({
  whileHover: shouldReduceMotion() ? {} : { scale },
  whileTap: shouldReduceMotion() ? {} : { scale: 0.98 },
  transition: { duration: durations.fast },
});

// Lift on hover (project cards)
export const hoverLift = (yOffset = -8, shadowIntensity = 0.25) => ({
  whileHover: shouldReduceMotion() ? {} : {
    y: yOffset,
    boxShadow: `0 ${Math.abs(yOffset) * 3}px ${Math.abs(yOffset) * 6}px rgba(201, 169, 97, ${shadowIntensity})`,
  },
  transition: { duration: durations.medium },
});

// Gold border glow on hover
export const goldGlowHover = {
  whileHover: shouldReduceMotion() ? {} : {
    borderColor: '#c9a961',
    boxShadow: '0 0 20px rgba(201, 169, 97, 0.4)',
  },
  transition: { duration: durations.fast },
};

// Pulsing glow animation (for hero background)
export const pulseGlow = {
  animate: shouldReduceMotion() ? {} : {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.1, 1],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
