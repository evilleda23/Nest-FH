import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: 'How many rows do you need',
    default: 5,
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number) //enableImplicitConversions: true
  limit?: number;

  @ApiProperty({
    description: 'How many rows do you want to skip',
    default: 0,
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
