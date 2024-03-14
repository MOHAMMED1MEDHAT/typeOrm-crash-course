import { ClientEntity } from 'src/client/client.entity';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { TransactionTypes } from './transactionTypes.enum';

@Entity('transaction')
export class TransactionEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		type: 'enum',
		enum: TransactionTypes,
	})
	type: string;

	@Column({
		type: 'numeric',
	})
	amount: number;

	@ManyToOne(() => ClientEntity, (client) => client.transactions)
	@JoinColumn({
		name: 'client_id',
		referencedColumnName: 'id',
	})
	client: ClientEntity;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}
