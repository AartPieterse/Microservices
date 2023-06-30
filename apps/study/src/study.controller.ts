import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudyService } from './study.service';
import { CreateStudyRequest } from '../dto/create-study.request';

@Controller()
export class StudyController {
  constructor(private readonly studyService: StudyService) {}

  @Post()
  async createStudy(@Body() request: CreateStudyRequest) {
    return this.studyService.createStudy(request);
  }

  @Get()
  async getStudy() {
    return this.studyService.getStudy();
  }
}
