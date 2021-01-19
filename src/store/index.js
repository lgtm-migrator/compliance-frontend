import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/files/esm/Registry';
import { notifications } from '@redhat-cloud-services/frontend-components-notifications';
import promiseMiddleware from 'redux-promise-middleware';
import { reducer as form } from 'redux-form';

let registry;

export function init (...middleware) {
    registry = getRegistry({}, [
        promiseMiddleware(),
        ...middleware.filter(item => typeof item !== 'undefined')
    ]);

    registry.register({ form, notifications });
    return registry;
}

export function getStore () {
    return registry.getStore();
}

export function register (...args) {
    return registry.register(...args);
}
