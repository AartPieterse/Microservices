import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {

  constructor(
    private paymentRepo: PaymentRepository
  ) {}

  async hasPaid(studentId: string) {
    return (await this.paymentRepo.findOne({ studentId })).paid;
  }

  async markAsPaid(studentId: string) {
    await this.paymentRepo.update(studentId, { paid: true });
  }

  
}

