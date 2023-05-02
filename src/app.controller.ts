import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDataDto } from './dtos/create-user-data.dto';

@Controller('/registration')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  setUserDataToDB(@Body() data: CreateUserDataDto) {
    return this.appService.createUserData(data);
  }
}
