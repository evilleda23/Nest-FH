import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  stock?: number;
  @IsString({ each: true })
  @IsArray()
  sizes: string[];
  @IsIn(['men', 'women', 'kid', 'unis'])
  gender: string;

  @IsString({ each: true })
  @MinLength(1, { each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @IsString({ each: true })
  @MinLength(1, { each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}