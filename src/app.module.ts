import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot("mongodb://localhost:27017/nest"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
