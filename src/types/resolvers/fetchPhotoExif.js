import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getExif from "@/methods/photos/getExif"

async function fetchPhotoExif(photoId = ``) {
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getExif({ photoId })
    let result = {}

    if (!!photo && !!photo.exif) {
      const exif = Object.entries(
        photo.exif.reduce((hash, entry) => {
          hash[entry.tagspace] = photo.exif.filter(tag => tag.tagspace === entry.tagspace).reduce((keys, values) => {
            keys[values.tag] = (values?.clean)?._content || (values?.raw)?._content || null
            return keys
          }, {})
          return hash
        }, {})
      ).reduce((hash, [tagspace, entries]) => {
        hash[tagspace] = entries
        return hash
      }, {})

      result = {
        id: photoId,
        camera: photo?.camera || null,
        make: exif[`IFD0`]?.Make || null,
        model: exif[`IFD0`]?.Model || null,
        xResolution: exif[`IFD0`]?.XResolution || null,
        yResolution: exif[`IFD0`]?.YResolution || null,
        software: exif[`IFD0`]?.Software || null,
        shootingMode: exif[`ExifIFD`]?.ExposureProgram || null,
        exposure: exif[`ExifIFD`]?.ExposureTime || null,
        aperture: exif[`ExifIFD`]?.FNumber || null,
        iso: exif[`ExifIFD`]?.ISO || null,
        brightness: exif[`ExifIFD`]?.BrightnessValue || null,
        bias: exif[`ExifIFD`]?.ExposureCompensation || null,
        meteringMode: exif[`ExifIFD`]?.MeteringMode || null,
        whiteBalance: exif[`ExifIFD`]?.WhiteBalance || null,
        flash: exif[`ExifIFD`]?.Flash || null,
        lensInfo: exif[`ExifIFD`]?.LensInfo || null,
        lensModel: exif[`ExifIFD`]?.LensModel || null,
        focalLength: exif[`ExifIFD`]?.FocalLength || null,
        maxAperture: exif[`ExifIFD`]?.MaxApertureValue || null,
        colorSpace: exif[`ExifIFD`]?.ColorSpace || null,
        contrast: exif[`ExifIFD`]?.Contrast || null,
        saturation: exif[`ExifIFD`]?.Saturation || null,
        sharpness: exif[`ExifIFD`]?.Sharpness || null,
        digitalZoomRatio: exif[`ExifIFD`]?.DigitalZoomRatio || null,
        focalPlaneXResolution: exif[`ExifIFD`]?.FocalPlaneXResolution || null,
        focalPlaneYResolution: exif[`ExifIFD`]?.FocalPlaneYResolution || null,
        focalPlaneUnit: exif[`ExifIFD`]?.FocalPlaneResolutionUnit || null,
        created: exif[`ExifIFD`]?.DateTimeOriginal || null,
        modified: exif[`ExifIFD`]?.ModifyDate || null,
        source: exif[`ExifIFD`]?.FileSource || null,
        sceneType: exif[`ExifIFD`]?.SceneType || null,
        sceneCaptureType: exif[`ExifIFD`]?.SceneCaptureType || null,
        compression: exif[`IFD1`]?.Compression || null
      }
    }

    info(`Successfully ran fetchPhotoExif`, { photoId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPhotoExif`, err)
  }
}

export default fetchPhotoExif
