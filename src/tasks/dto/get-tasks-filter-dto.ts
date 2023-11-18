import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../tasks-status-enum";

export class FilterTaskDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    search?:string;

    @IsOptional()
    @IsString()
    status?: TaskStatus
}