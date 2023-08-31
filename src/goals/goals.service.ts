import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/dto/creategoal.dto';
import { Goal } from '../interface/goal.interface';

@Injectable()
export class GoalsService {
  //this 'Goal' should be same as that of named in goalsModule.
  // And Model<Goal> is the interface taken
  constructor(@InjectModel('Goal') private goalModule: Model<Goal>) {}

  async allItems(): Promise<Goal[]> {
    return await this.goalModule.find();
  }
  async oneItem(id: string) {
    return await this.goalModule.findById({ _id: id });
  }

  async createOne(goal: Item) {
    return await this.goalModule.create(goal);
  }
}
