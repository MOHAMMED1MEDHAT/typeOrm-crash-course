import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankerModule } from './banker/banker.module';
import { ClientModule } from './client/client.module';
import { ConfigsModule } from './configs/configs.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TransactionModule } from './transaction/transaction.module';
@Module({
	imports: [
		ConfigsModule,
		TypeOrmModule.forRoot(typeOrmConfig),
		ClientModule,
		BankerModule,
		TransactionModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
