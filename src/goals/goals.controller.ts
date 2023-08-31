import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Item } from 'src/dto/creategoal.dto';
import { Goal } from 'src/interface/goal.interface';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsServices: GoalsService) {}

  @Get()
  async findAll() {
    return await this.goalsServices.allItems();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goalsServices.oneItem(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }

  @Post()
  //Item is for request from client
  create(@Body() goalBody: Item) {
    return this.goalsServices.createOne(goalBody);
  }

  @Put(':id')
  update(@Body() updateGoal: Item, @Param('id') updateId: String) {
    console.log(updateId);
    return updateGoal;
  }
}
