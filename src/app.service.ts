import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDataDto } from './dtos/create-user-data.dto';
import { User } from './schems/user-data.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async createUserData(dto: CreateUserDataDto) {
    const candidate = await this.UserModel.findOne({ email: dto.email });
    if (!candidate) {
      const createdUser = new this.UserModel(dto);
      return await createdUser.save();
    } else {
      throw new HttpException(
        'this email already registrated',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
