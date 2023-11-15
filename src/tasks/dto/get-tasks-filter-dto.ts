import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../tasks.model";

export class FilterTaskDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    search?:string;

    @IsOptional()
    @IsString()
    status?: TaskStatus
}