import { invariant, missingArgument } from "@/utilities"

export default class Exif {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.photoId
    this.photoId = data?.photoId
    this.camera = data?.camera || null
    this.make = (data?.IFD0)?.Make || null
    this.model = (data?.IFD0)?.Model || null
    this.xResolution = (data?.IFD0)?.XResolution || null
    this.yResolution = (data?.IFD0)?.YResolution || null
    this.software = (data?.IFD0)?.Software || null
    this.shootingMode = (data?.ExifIFD)?.ExposureProgram || null
    this.exposure = (data?.ExifIFD)?.ExposureTime || null
    this.aperture = (data?.ExifIFD)?.FNumber || null
    this.iso = (data?.ExifIFD)?.ISO || null
    this.brightness = (data?.ExifIFD)?.BrightnessValue || null
    this.bias = (data?.ExifIFD)?.ExposureCompensation || null
    this.meteringMode = (data?.ExifIFD)?.MeteringMode || null
    this.whiteBalance = (data?.ExifIFD)?.WhiteBalance || null
    this.flash = (data?.ExifIFD)?.Flash || null
    this.lensInfo = (data?.ExifIFD)?.LensInfo || null
    this.lensModel = (data?.ExifIFD)?.LensModel || null
    this.focalLength = (data?.ExifIFD)?.FocalLength || null
    this.maxAperture = (data?.ExifIFD)?.MaxApertureValue || null
    this.colorSpace = (data?.ExifIFD)?.ColorSpace || null
    this.contrast = (data?.ExifIFD)?.Contrast || null
    this.saturation = (data?.ExifIFD)?.Saturation || null
    this.sharpness = (data?.ExifIFD)?.Sharpness || null
    this.digitalZoomRatio = (data?.ExifIFD)?.DigitalZoomRatio || null
    this.focalPlaneXResolution = (data?.ExifIFD)?.FocalPlaneXResolution || null
    this.focalPlaneYResolution = (data?.ExifIFD)?.FocalPlaneYResolution || null
    this.focalPlaneUnit = (data?.ExifIFD)?.FocalPlaneResolutionUnit || null
    this.created = new Date(...(data?.ExifIFD)?.DateTimeOriginal.replace(/(:| )/g, `,`).split(`,`))
    this.modified = new Date(...(data?.IFD0)?.ModifyDate.replace(/(:| )/g, `,`).split(`,`))
    this.source = (data?.ExifIFD)?.FileSource || null
    this.sceneType = (data?.ExifIFD)?.SceneType || null
    this.sceneCaptureType = (data?.ExifIFD)?.SceneCaptureType || null
    this.compression = (data?.IFD1)?.Compression || null
  }
}
