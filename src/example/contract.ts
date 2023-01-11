

@Entity()
export class Contract {
  @Column({ primary: true, nullable: false, transformer: { from(value: string) => { return new ContractId(value); }}})
  contractId: ContractId;

}

export class ContractId {
  constructor(private readonly contractIdValue: string) {}

  toString(): string {
    return this.contractIdValue;
  }
}
