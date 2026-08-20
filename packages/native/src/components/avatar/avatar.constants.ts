import type { AvatarSize } from './avatar.types';

/**
 * Display names for Avatar components
 */
export const AVATAR_DISPLAY_NAME = {
  ROOT: 'PrismUINative.Avatar',
  IMAGE: 'PrismUINative.Avatar.Image',
  FALLBACK: 'PrismUINative.Avatar.Fallback',
  BACKGROUND: 'PrismUINative.Avatar.Background',
};

/**
 * Default icon sizes for different avatar sizes
 */
export const AVATAR_DEFAULT_ICON_SIZE: Record<AvatarSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};
