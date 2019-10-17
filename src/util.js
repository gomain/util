'use strict';

export const invoke = (...args) => callee => callee(...args);
