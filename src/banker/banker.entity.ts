import { ClientEntity } from 'src/client/client.entity';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('banker')
export class BankerEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		type: 'uuid',
		unique: true,
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

	@ManyToMany(() => ClientEntity)
	@JoinTable({
		name: 'banker_clients',
		joinColumn: { name: 'banker_id', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'client_id', referencedColumnName: 'id' },
	})
	clients: ClientEntity[];

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}
