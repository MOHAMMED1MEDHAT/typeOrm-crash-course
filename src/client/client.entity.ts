import { BankerEntity } from 'src/banker/banker.entity';
import { TransactionEntity } from 'src/transaction/transaction.entity';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('client')
export class ClientEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column()
	phone: string;

	@Column({
		unique: true,
		length: 10,
	})
	cardNumber: string;

	@Column({
		type: 'numeric',
	})
	balance: number;

	@Column()
	password: string;

	@Column()
	salt: string;

	@OneToMany(() => TransactionEntity, (transaction) => transaction.client)
	transactions: TransactionEntity[];

	@ManyToMany(() => BankerEntity)
	bankers: BankerEntity[];
	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	@Column({
		default: true,
		name: 'active',
	})
	isActive: boolean;

	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additionalInfo: {
		age: number;
		hairColor: string;
	};

	@Column({
		type: 'simple-array',
		default: [],
	})
	familyMembers: string[];
}
