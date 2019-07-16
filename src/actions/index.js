import * as type from './actionTypes';

export const getNextMonth = () => ({
    type: type.NEXT_MONTH,
});

export const getPrevMonth = () => ({
    type: type.PREV_MONTH,
});

export const getThisMonth = () => ({
    type: type.THIS_MONTH,
});

export const openWindow = () => ({
    type: type.OPEN_WINDOW,
});

export const closeWindow = () => ({
    type: type.CLOSE_WINDOW,
});