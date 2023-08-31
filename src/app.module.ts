import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoalsController } from './goals/goals.controller';
import { GoalsService } from './goals/goals.service';
import { GoalsModule } from './goals/goals.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [GoalsModule, MongooseModule.forRoot('mongodb+srv://dhanashri:Dhanashri123@cluster0.dvdkbw6.mongodb.net/new-node-app?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
