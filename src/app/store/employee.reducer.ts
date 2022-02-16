import { createReducer, on} from '@ngrx/store';
import { Employee } from '../core/service/emp.model';
import { retrievedEmployees } from './employee.actions';

export const initialState: Employee[] = [];

const _employeeReducer = createReducer(
    initialState,
    on(retrievedEmployees, (state, { employeeList}) => {
        return [...employeeList];
    })
);

export function employeeReducer(state: any, actions: any) {
    return _employeeReducer(state, actions);
}