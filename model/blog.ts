import { ImageInfo } from '@/model/index';

export interface Tag {
  id: number;
  tagLabel: string;
}

export interface PostItemInfo {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  thumbnail: ImageInfo | null;
  slug: string;
  tags: Tag[];
  updatedAt?: string;
  nextPage?: number | null;
  views: number;
}

export interface PostItemRequest {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  thumbnail: { id: number } | null;
  slug: string;
  tags: Tag[];
  content: string;
}

export interface PostDetail extends PostItemInfo {
  content: string;
}

export interface ImageResponse {
  secure_url: string,
  url: string
}