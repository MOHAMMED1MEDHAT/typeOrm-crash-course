import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsModule } from './configs/configs.module';
import { typeOrmConfig } from './configs/typeorm.config';
@Module({
	imports: [ConfigsModule, TypeOrmModule.forRoot(typeOrmConfig)],
	controllers: [],
	providers: [],
})
export class AppModule {}
