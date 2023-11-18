import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status-enum';
import { CreateTaskDto } from './dto/create-task-dto';
import { FilterTaskDto } from './dto/get-tasks-filter-dto';
import { Task } from './taks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

   constructor(
      @InjectRepository(Task)
      private taskRepository: Repository<Task>) {}

   async getTaskById(id: string): Promise<Task> {
      const found = await this.taskRepository.findOne({where: {id}});

      if (!found) {
         throw new NotFoundException(`Task with ID "${id}" not found`);
      }

      return found;
   }

   async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
      const {title, description} =  createTaskDto;
      const task = this.taskRepository.create({
         title,
         description,
         status: TaskStatus.OPEN
      });

      await this.taskRepository.save(task);

      return task;
   }
    
}
