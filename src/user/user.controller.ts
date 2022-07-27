import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { StoreDto } from "./dto/store.dto";
import { UpdateDto } from "./dto/update.dto";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/")
  async index() {
    return this.userService.index();
  }

  @Post("/")
  async store(@Body() storeDto: StoreDto) {
    const user = await this.userService.store(storeDto);

    return {
      message: "User create successfully",
      status: 200,
      user,
    };
  }

  @Get("/:userId")
  async show(@Param("userId") userId: string) {
    return this.userService.show(userId);
  }

  @Put("/:userId")
  async update(@Param("userId") userId: string, @Body() updateDto: UpdateDto) {
    const user = await this.userService.update(userId, updateDto);

    if (!user) {
      return {
        message: "User mpt successfully",
        status: 404,
      };
    }

    return {
      message: "User updated successfully",
      status: 200,
      user,
    };
  }

  @Delete("/:userId")
  async destroy(@Param("userId") userId: string) {
    await this.userService.destroy(userId);

    return {
      message: "User deleted successfully",
      status: 200,
    };
  }
}
