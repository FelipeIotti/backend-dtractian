import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("units")
export class Units {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  company_id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

}