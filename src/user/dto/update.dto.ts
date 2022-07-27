import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
