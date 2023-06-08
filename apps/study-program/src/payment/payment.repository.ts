import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { AbstractRepository } from "database/abstract.repository";
import { Model } from "mongoose";
import { Payment } from "src/schemas/payment.schema";

@Injectable()
export class PaymentRepository extends AbstractRepository<Payment> {
    constructor(@InjectModel(Payment.name) applicationModel: Model<Payment>) {
        super(applicationModel);
    }
}