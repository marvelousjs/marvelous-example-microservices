/*
 * this file is automatically generated for marvelous via zappjs
 * any manual changes to this file will be overwritten with the "mvs" command
 */

import { loadServiceHandler } from 'marvelous';

import { CreateUserCall } from '../../calls';
import { ICreateUserHandler } from '../types';

export const createUserHandler: ICreateUserHandler = loadServiceHandler(CreateUserCall);
