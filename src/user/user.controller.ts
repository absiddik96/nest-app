import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { StoreDto } from "./dto/store.dto";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  index() {
    return this.userService.index();
  }

  @Post()
  store(@Body() storeDto: StoreDto) {
    this.userService.store(storeDto);

    return {
      message: "User create successfully",
      status: 200,
    };
  }
}
