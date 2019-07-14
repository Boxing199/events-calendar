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