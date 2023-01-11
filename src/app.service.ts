import { Injectable } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contract } from './example/contract';
import { ContractId } from './example/contract-id';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Contract)
    private readonly contractRepository: Repository<Contract>,
  ) {}

  getContract(contractId: ContractId): Promise<Contract | null> {
    return this.contractRepository.findOne({
      where: {
        contractId: Equal(contractId),
      },
    });
  }

  save(contract: Contract): Promise<Contract> {
    return this.contractRepository.save(contract);
  }
}
