import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Get all dirs' })
  @ApiResponse({ type: [String] })
  @Get()
  getDirs(): Observable<string[]> {
    return this.appService.getDirs();
  }

  @ApiOperation({ summary: 'Get dir content' })
  @ApiResponse({ type: [String] })
  @Get(':dirName')
  getDirContent(@Param('dirName') dirName: string): Observable<string[]> {
    return this.appService.getDirContent(dirName || '');
  }
}
