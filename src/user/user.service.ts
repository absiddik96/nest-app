import { Injectable } from "@nestjs/common";
import { StoreDto } from "./dto/store.dto";

@Injectable()
export class UserService {
  users = [
    {
      name: "name",
      email: "email",
    },
  ];

  index() {
    return this.users;
  }

  store(storeDto: StoreDto) {
    this.users.push(storeDto);
  }
}
