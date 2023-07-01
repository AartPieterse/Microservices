/**
 * Represents an event indicating that a potential class has been registered.
 * Extends the AggregateRoot class from the @nestjs/cqrs module.
 */
import { AggregateRoot } from "@nestjs/cqrs";

export class PotentialClassRegisteredEvent extends AggregateRoot {
    /**
     * Constructs an instance of PotentialClassRegisteredEvent.
     * @param createPotentialClassDto The data related to the potential class being registered.
     */
    constructor(public readonly createPotentialClassDto: any) {
        super();
    }
}
