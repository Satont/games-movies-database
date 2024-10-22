import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VideoServices } from './video.service';
import { CreateVideoDTO } from '../../common/dtos/video.dto';
import { VideoEntity } from './video.entity';

@ApiTags('videos')
@Controller('videos')
export class VideoController {
  constructor(private videoServices: VideoServices) {}

  @Post('create')
  async createVideo(@Body() video: CreateVideoDTO): Promise<void> {
    await this.videoServices.createVideo(video);
  }

  @Get(':id')
  async findVideoById(@Param('id') id: string): Promise<VideoEntity> {
    return await this.videoServices.findVideoById(parseInt(id));
  }

  @Delete(':id')
  async deleteVideo(@Param('id') id: string): Promise<void> {
    await this.videoServices.deleteVideo(parseInt(id));
  }

  @Get()
  async getAllVideos(): Promise<VideoEntity[]> {
    return await this.videoServices.getAllVideos();
  }
}
