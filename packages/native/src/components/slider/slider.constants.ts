/**
 * Display names for Slider components
 */
export const DISPLAY_NAME = {
  ROOT: 'PrismUI.Slider.Root',
  OUTPUT: 'PrismUI.Slider.Output',
  TRACK: 'PrismUI.Slider.Track',
  TRACK_BACKGROUND: 'PrismUI.Slider.TrackBackground',
  FILL: 'PrismUI.Slider.Fill',
  THUMB: 'PrismUI.Slider.Thumb',
};

/**
 * Extra hit-slop around the thumb to improve touch target
 */
export const THUMB_HIT_SLOP = 16;

/**
 * Spring animation configuration for thumb scale feedback
 */
export const THUMB_SPRING_CONFIG = {
  damping: 15,
  stiffness: 200,
  mass: 0.5,
};
