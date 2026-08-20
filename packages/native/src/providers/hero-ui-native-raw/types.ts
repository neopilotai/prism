import type { ReactNode } from 'react';
import type { PrismUINativeConfig } from '../hero-ui-native/types';

/**
 * Configuration object for PrismUINativeProviderRaw
 *
 * @description
 * A subset of {@link PrismUINativeConfig} containing only the configuration
 * options supported by the raw provider.
 */
export type PrismUINativeConfigRaw = Pick<
  PrismUINativeConfig,
  'textProps' | 'textInputProps' | 'animation' | 'devInfo' | 'isRTL'
>;

/**
 * Props for PrismUINativeProviderRaw component
 *
 * @interface PrismUINativeProviderRawProps
 *
 * @description
 * Props for the raw variant of the provider that includes only
 * a subset of functionality from {@link PrismUINativeProviderProps}.
 */
export interface PrismUINativeProviderRawProps {
  /**
   * Child components to render within the raw provider
   */
  children: ReactNode;

  /**
   * Configuration object for the raw provider
   *
   * @description
   * A subset of configuration options supported by the raw provider.
   * See {@link PrismUINativeConfigRaw} for available options.
   */
  config?: PrismUINativeConfigRaw;
}
