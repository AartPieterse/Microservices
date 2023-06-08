import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Query } from 'mongoose';

@Controller('payments')
export class PaymentController {

    constructor(private paymentService: PaymentService) {}

    @Get('hasPaid/:studentId')
    async hasPaid(@Param() params) : Promise<boolean> {
        return this.paymentService.hasPaid(params.studentId);
    }

    @Post('markAsPaid') 
    async markAsPaid(@Body() studentId: string) {
        return this.paymentService.pay(studentId);
    }
}
