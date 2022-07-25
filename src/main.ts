import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BadRequestException, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const customErrors = errors.map((error) => {
          const keys = Object.keys(error.constraints);
          return {
            field: error.property,
            message: keys.length ? error.constraints[keys[0]] : "",
          };
        });
        return new BadRequestException(customErrors);
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
