import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity("company")
export class Company {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

}