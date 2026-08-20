import {HEROUI_PROVIDER, NEXTUI_PROVIDER} from '../../../constants/prefix';
import {getStore, updateAffectedFiles, writeFileAndUpdateStore} from '../../store';

import {migrateByRegex} from './migrate-common';

/**
 * Migrate the NextUIProvider to PrismUIProvider will directly write the file
 * @example
 * migrateNextuiProvider(['xxx']);
 * <NextUIProvider> -> <PrismUIProvider>
 */
export function migrateNextuiProvider(paths: string[]) {
  for (const path of paths) {
    try {
      let rawContent = getStore(path, 'rawContent');
      let dirtyFlag = false;

      if (!rawContent) {
        continue;
      }

      // Replace JSX element NextUIProvider with PrismUIProvider
      // Replace NextUIProvider with PrismUIProvider in import statements
      ({dirtyFlag, rawContent} = migrateByRegex(rawContent, NEXTUI_PROVIDER, HEROUI_PROVIDER));

      if (dirtyFlag) {
        // Write the modified content back to the file
        writeFileAndUpdateStore(path, 'rawContent', rawContent);
        updateAffectedFiles(path);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  }
}
