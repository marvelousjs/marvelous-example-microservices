/*
 * this file is automatically generated for marvelous via zappjs
 * any manual changes to this file will be overwritten with the "mvs" command
 */

import { loadHandler } from 'marvelous';

import { CreateRepoAction } from '../../actions';
import { ICreateRepoHandler } from '../types';

export const createRepoHandler: ICreateRepoHandler = loadHandler(CreateRepoAction);
