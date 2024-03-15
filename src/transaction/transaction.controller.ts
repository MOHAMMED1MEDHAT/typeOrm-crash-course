import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dtos';
import { TransactionTypesValidationPipe } from './pipes';
import { TransactionService } from './transaction.service';
import { TransactionTypes } from './transactionTypes.enum';

@Controller('transaction')
export class TransactionController {
	constructor(private transactionService: TransactionService) {}

	//create transaction
	@Post()
	createTransaction(@Body() transaction: CreateTransactionDto) {
		return this.transactionService.createTransaction(transaction);
	}
	
	//update transaction type
	@Patch("/:id/type")
	updateTransactionType(@Body('type',TransactionTypesValidationPipe) type:TransactionTypes)

	//delete transaction
	//get transaction
	//get transactions
}
