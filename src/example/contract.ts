import { Entity, Column } from 'typeorm';
import { ContractId } from './contract-id';

@Entity()
export class Contract {
  @Column({
    type: 'varchar',
    primary: true,
    nullable: false,
    transformer: {
      from(value: string) {
        return new ContractId(value);
      },
      to(contractId: ContractId) {
        return contractId.toContractIdString();
      },
    },
  })
  contractId: ContractId;
}
