import type {CommandOptions} from '../helpers/type';

import {Logger} from '@helpers/logger';
import {outputComponents} from '@helpers/output-info';
import {getPackageInfo, transformPackageDetail} from '@helpers/package';
import {PRISMUI_PACKAGES} from 'src/constants/required';

import {resolver} from '../constants/path';

export async function listAction(options: CommandOptions) {
  const {packagePath = resolver('package.json')} = options;

  try {
    const {allDependencies, allDependenciesKeys} = getPackageInfo(packagePath);

    const installed = PRISMUI_PACKAGES.filter((pkg) => allDependenciesKeys.has(pkg));

    if (!installed.length) {
      Logger.warn(
        'No PrismUI packages found. Run `prismui install` to install @prismui/react and @prismui/styles.'
      );

      return;
    }

    const components = await transformPackageDetail(installed, allDependencies);

    outputComponents({components, message: 'Installed PrismUI packages:\n'});
  } catch (error) {
    Logger.prefix('error', `An error occurred while listing packages: ${error}`);
  }

  process.exit(0);
}
