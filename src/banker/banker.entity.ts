import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('banker')
export class BankerEntity extends BaseEntity {
	@PrimaryColumn({
		type: 'uuid',
	})
	id: string;

	@Column({
		type: 'uuid',
		unique: true,
		length: 10,
	})
	employeeId: string;

	@Column()
	name: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column()
	phone: string;

	@Column()
	password: string;

	@Column()
	salt: string;

	@Column({
		unique: true,
		length: 10,
	})
	cardNumber: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}
