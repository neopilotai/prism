/**
 * Display names for the Select components
 */
export const DISPLAY_NAME = {
  ROOT: 'PrismUINative.Select.Root',
  TRIGGER: 'PrismUINative.Select.Trigger',
  TRIGGER_BACKGROUND: 'PrismUINative.Select.TriggerBackground',
  VALUE: 'PrismUINative.Select.Value',
  PORTAL: 'PrismUINative.Select.Portal',
  OVERLAY: 'PrismUINative.Select.Overlay',
  CONTENT: 'PrismUINative.Select.Content',
  CONTENT_BACKGROUND: 'PrismUINative.Select.ContentBackground',
  ITEM: 'PrismUINative.Select.Item',
  ITEM_LABEL: 'PrismUINative.Select.ItemLabel',
  ITEM_DESCRIPTION: 'PrismUINative.Select.ItemDescription',
  ITEM_INDICATOR: 'PrismUINative.Select.ItemIndicator',
  LIST_LABEL: 'PrismUINative.Select.ListLabel',
  CLOSE: 'PrismUINative.Select.Close',
  TRIGGER_INDICATOR: 'PrismUINative.Select.TriggerIndicator',
  CHEVRON_DOWN_ICON: 'PrismUINative.Select.ChevronDownIcon',
} as const;

/**
 * Default icon size for the indicator
 */
export const DEFAULT_ICON_SIZE = 16;

/**
 * Spring configuration for indicator animation
 */
export const INDICATOR_SPRING_CONFIG = {
  damping: 140,
  stiffness: 1000,
  mass: 4,
};

/**
 * Default offset from trigger element
 */
export const DEFAULT_OFFSET = 8;

/**
 * Default alignment offset
 */
export const DEFAULT_ALIGN_OFFSET = 0;

/**
 * Default screen edge insets
 */
export const DEFAULT_INSETS = {
  top: 12,
  bottom: 12,
  left: 12,
  right: 12,
};
