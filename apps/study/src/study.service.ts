import { Injectable, Inject } from '@nestjs/common';
import { CreateStudyRequest } from '../dto/create-study.request';
import { StudyRepository } from './study.repository';
import { STUDENT_MANAGEMENT_SERVICE } from '../constants/services';
import { lastValueFrom } from "rxjs"
import { ClientProxy } from "@nestjs/microservices"
@Injectable()
export class StudyService {
  constructor(
    private readonly studyRepository: StudyRepository, 
    @Inject(STUDENT_MANAGEMENT_SERVICE) private studentmanagementClient: ClientProxy, 
    ) {}

  async createStudy(request: CreateStudyRequest){
    const session = await this.studyRepository.startTransaction()
    try {
      const study = await this.studyRepository.create(request, { session } )
      await lastValueFrom(
        this.studentmanagementClient.emit('study_created', {
          request,
        } ),
      ) 
      await session.commitTransaction()
      return study
    } catch(err) {
      await session.abortTransaction()
      throw err;
    }
  }

  async getStudy() {
    return this.studyRepository.find({})
  }
}
