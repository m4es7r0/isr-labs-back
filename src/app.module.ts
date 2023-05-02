import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './schems/user-data.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://isrlabsforstudy:vSdwDdxNNLXOOsPC@db.er1kgiy.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
