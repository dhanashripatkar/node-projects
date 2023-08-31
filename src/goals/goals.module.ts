import { Module } from '@nestjs/common';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { MongooseModule } from '@nestjs/mongoose';
import { goalSchema } from './schemas/goal.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Goal', schema: goalSchema}])],
  controllers: [GoalsController],
  providers: [GoalsService],
})
export class GoalsModule {

}
