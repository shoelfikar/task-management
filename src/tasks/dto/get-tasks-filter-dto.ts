import { TaskStatus } from "../tasks.model";

export class FilterTaskDto {
    search?:string;
    status?: TaskStatus
}