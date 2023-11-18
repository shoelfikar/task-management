import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './tasks-status-enum';
import { CreateTaskDto } from './dto/create-task-dto';
import { FilterTaskDto } from './dto/get-tasks-filter-dto';
import { UpdateTaskStatusDto } from './dto/update-task-status-dto';
import { Task } from './taks.entity';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get('/:id')
    getTasksById(@Param('id') id: string): Promise<Task> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(createTaskDto);
    }
}
