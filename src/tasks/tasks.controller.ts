import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { FilterTaskDto } from './dto/get-tasks-filter-dto';
import { UpdateTaskStatusDto } from './dto/update-task-status-dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getAllTask(@Query() filterTaskDto:FilterTaskDto): Task[] {
        if(Object.keys(filterTaskDto).length) {
            return this.taskService.getTaskWithFilters(filterTaskDto)
        }

        return this.taskService.getAllTask();
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string): Task {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto:CreateTaskDto): Task {
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string): void {
        return this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTask(@Param('id') id:string, @Body() updateTaskStatus:UpdateTaskStatusDto): Task {
        const { status } = updateTaskStatus
        return this.taskService.updateTask(id, status);
    }
}
