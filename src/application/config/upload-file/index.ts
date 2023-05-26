import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy'
const f = createUploadthing()

export const generalFileRouter = {
  imageUploader: f
    .fileTypes(['image'])
    .maxSize('8MB')
    .onUploadComplete(async () => {})
} satisfies FileRouter

export type GeneralFileRouter = typeof generalFileRouter
