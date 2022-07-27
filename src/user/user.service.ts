import { Injectable } from "@nestjs/common";
import { StoreDto } from "./dto/store.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { UpdateDto } from "./dto/update.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async index(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async store(storeDto: StoreDto): Promise<User> {
    return new this.userModel(storeDto).save();
  }

  async show(userId: string): Promise<User> {
    console.log(userId);
    return this.userModel.findById(userId);
  }

  async update(userId: string, updateDto: UpdateDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, updateDto);
  }

  async destroy(userId: string): Promise<User> {
    return this.userModel.findByIdAndRemove(userId);
  }
}
