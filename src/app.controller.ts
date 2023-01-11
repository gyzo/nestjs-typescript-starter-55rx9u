import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Contract } from './example/contract';
import { ContractId } from './example/contract-id';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Contract> {
    const contractId = new ContractId('Test ID');
    const contract = new Contract();

    contract.contractId = contractId;

    const savedContract = await this.appService.save(contract);

    const contractResult = await this.appService.getContract(contractId);

    return contractResult;
  }
}
