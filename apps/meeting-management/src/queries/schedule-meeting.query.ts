import { IQuery } from "@nestjs/cqrs";
export class GetScheduledMeetingQuery implements IQuery {
    constructor(public readonly id: string) {}
  }