#!/usr/bin/env node

import { greeting, askEven } from '..';

const userName = greeting();
askEven(userName);
