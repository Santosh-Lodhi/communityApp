import { createAction, props} from '@ngrx/store';
import { Employee } from '../core/service/emp.model';

export const retrievedEmployees = createAction(
    '[Employee API] API Success',
    props<{employeeList: Employee[]}>()
);

export const invokeEmployeeAPI = createAction(
    '[Employee API] invoke API'
);