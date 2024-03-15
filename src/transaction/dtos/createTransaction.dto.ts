import {
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

import { TransactionTypes } from '../transactionTypes.enum';

export class CreateTransactionDto {
	@IsEnum(TransactionTypes)
	type: TransactionTypes;

	@IsNotEmpty()
	@IsNumber()
	amount: number;

	@IsNotEmpty()
	@IsString()
	@IsOptional()
	description: string;
}
