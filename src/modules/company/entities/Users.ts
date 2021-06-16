import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("users")
export class Users {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  company_id: string;

  @CreateDateColumn()
  created_at: Date;

}