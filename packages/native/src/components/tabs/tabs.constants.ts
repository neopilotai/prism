import type { WithSpringConfig } from 'react-native-reanimated';

export const DISPLAY_NAME = {
  ROOT: 'PrismUINative.Tabs.Root',
  LIST: 'PrismUINative.Tabs.List',
  LIST_BACKGROUND: 'PrismUINative.Tabs.ListBackground',
  SCROLL_VIEW: 'PrismUINative.Tabs.ScrollView',
  TRIGGER: 'PrismUINative.Tabs.Trigger',
  LABEL: 'PrismUINative.Tabs.Label',
  INDICATOR: 'PrismUINative.Tabs.Indicator',
  SEPARATOR: 'PrismUINative.Tabs.Separator',
  CONTENT: 'PrismUINative.Tabs.Content',
} as const;

export const DEFAULT_INDICATOR_SPRING_CONFIG: WithSpringConfig = {
  stiffness: 1200,
  damping: 120,
};
