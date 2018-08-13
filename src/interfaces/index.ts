export interface NumberState {
    number: number;
}

export interface ApplicationState {
    number: NumberState;
}

import { Action } from 'redux';

export interface NumberAction extends Action {
    type: string;
    payload: {
        number: number;
    }
}