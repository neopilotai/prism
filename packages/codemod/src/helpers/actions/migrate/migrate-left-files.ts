import {
  PRISMUI_PLUGIN,
  PRISMUI_PREFIX,
  NEXTUI_PLUGIN,
  NEXTUI_PREFIX
} from '../../../constants/prefix';
import {getStore, updateAffectedFiles, writeFileAndUpdateStore} from '../../store';

export function migrateLeftFiles(files: string[]) {
  for (const file of files) {
    const rawContent = getStore(file, 'rawContent');
    const replaceContent = rawContent
      .replaceAll(NEXTUI_PREFIX, PRISMUI_PREFIX)
      .replaceAll(NEXTUI_PLUGIN, PRISMUI_PLUGIN);

    writeFileAndUpdateStore(file, 'rawContent', replaceContent);
    updateAffectedFiles(file);
  }
}
