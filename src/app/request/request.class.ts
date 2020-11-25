import { User } from '../user/user.class';

export class Request {
    id: Number = 0;
    user: User;
    description: string = "";
    justification: string = "";
    dateNeeded: string ="";
    deliveryMode: string = "";
    status: string ="";
    total: number = 0;
    submittedDate: string = "";
    reasonForRejection: string ="";
    userName: string = "";
  
    
    constructor(){

    }
}