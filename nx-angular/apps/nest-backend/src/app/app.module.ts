import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { environment } from '../environments/environment';

const extraImports = [];
if (environment.production) {
  extraImports.push(
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'angular-app'),
    })
  );
}

@Module({
  imports: [...extraImports],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
