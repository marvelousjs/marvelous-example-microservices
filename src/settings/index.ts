import { settings as development } from './development';
import { settings as production } from './production';
import { settings as test } from './test';

import { ISettings } from '../interfaces';

function getSettings(): ISettings {
  switch (process.env.NODE_ENV) {
    case 'development': {
      return development;
    }
    case 'production': {
      return production;
    }
    case 'test': {
      return test;
    }
    default: {
      throw new Error(`Unknown environment: ${process.env.NODE_ENV}`);
    }
  }
}

export const settings = getSettings();
