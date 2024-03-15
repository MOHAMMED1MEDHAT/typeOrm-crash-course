import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TransactionTypes } from '../transactionTypes.enum';

export class TransactionTypesValidationPipe implements PipeTransform {
	readonly allowedTypes = {
		DEPOSIT: TransactionTypes.DEPOSIT,
		TRANSFER: TransactionTypes.TRANSFER,
		WITHDRW: TransactionTypes.WITHDRAW,
	};

	private isTypeValid(type: string): boolean {
		const value = this.allowedTypes[type];
		return value ? true : false;
	}

	transform(value: string): string {
		value = value.toUpperCase();
		if (!this.isTypeValid(value)) {
			throw new BadRequestException(
				`"${value}" is an invalid transaction type`,
			);
		}
		return value;
	}
}
