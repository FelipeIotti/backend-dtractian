import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("actives")
export class Actives {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  model: string;

  @Column() 
  units_id: string;

  @Column()
  responsible_id: string;

  @Column()
  responsible: string;

  @Column()
  company_id: string;

  @Column()
  status: string ;

  @Column()
  health_level: number;

  @CreateDateColumn()
  created_at: Date;
}