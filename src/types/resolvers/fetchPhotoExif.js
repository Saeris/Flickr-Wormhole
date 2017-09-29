import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getExif from "@/methods/photos/getExif"

async function fetchPhotoExif(photoId = ``) {
  invariant(photoId, missingArgument({photoId}))
  try {
    const data = await getExif({ photoId })
    let result = {}

    if (!!data.photo && !!data.photo.exif) {
      const exif = Object.entries(data.photo.exif
        .reduce((hash, entry) => {
          hash[entry.tagspace] = data.photo.exif
            .filter(tag => tag.tagspace === entry.tagspace)
            .reduce((keys, values) => {
              keys[values.tag] = !!values.clean ? values.clean._content : values.raw._content
              return keys
            }, {})
          return hash
        }, {}))
        .reduce((hash, [tagspace, entries]) => {
          hash[tagspace] = entries
          return hash
        }, {})

      result = {
        id: photoId,
        camera: data.photo.camera || null,
        make: !!exif[`IFD0`] && exif[`IFD0`].Make || null,
        model: !!exif[`IFD0`] && exif[`IFD0`].Model || null,
        xResolution: !!exif[`IFD0`] && exif[`IFD0`].XResolution || null,
        yResolution: !!exif[`IFD0`] && exif[`IFD0`].YResolution || null,
        software: !!exif[`IFD0`] && exif[`IFD0`].Software || null,
        shootingMode: !!exif[`ExifIFD`] && exif[`ExifIFD`].ExposureProgram || null,
        exposure: !!exif[`ExifIFD`] && exif[`ExifIFD`].ExposureTime || null,
        aperture: !!exif[`ExifIFD`] && exif[`ExifIFD`].FNumber || null,
        iso: !!exif[`ExifIFD`] && exif[`ExifIFD`].ISO || null,
        brightness: !!exif[`ExifIFD`] && exif[`ExifIFD`].BrightnessValue || null,
        bias: !!exif[`ExifIFD`] && exif[`ExifIFD`].ExposureCompensation || null,
        meteringMode: !!exif[`ExifIFD`] && exif[`ExifIFD`].MeteringMode || null,
        whiteBalance: !!exif[`ExifIFD`] && exif[`ExifIFD`].WhiteBalance || null,
        flash: !!exif[`ExifIFD`] && exif[`ExifIFD`].Flash || null,
        lensInfo: !!exif[`ExifIFD`] && exif[`ExifIFD`].LensInfo || null,
        lensModel: !!exif[`ExifIFD`] && exif[`ExifIFD`].LensModel || null,
        focalLength: !!exif[`ExifIFD`] && exif[`ExifIFD`].FocalLength || null,
        maxAperture: !!exif[`ExifIFD`] && exif[`ExifIFD`].MaxApertureValue || null,
        colorSpace: !!exif[`ExifIFD`] && exif[`ExifIFD`].ColorSpace || null,
        contrast: !!exif[`ExifIFD`] && exif[`ExifIFD`].Contrast || null,
        saturation: !!exif[`ExifIFD`] && exif[`ExifIFD`].Saturation || null,
        sharpness: !!exif[`ExifIFD`] && exif[`ExifIFD`].Sharpness || null,
        digitalZoomRatio: !!exif[`ExifIFD`] && exif[`ExifIFD`].DigitalZoomRatio || null,
        focalPlaneXResolution: !!exif[`ExifIFD`] && exif[`ExifIFD`].FocalPlaneXResolution || null,
        focalPlaneYResolution: !!exif[`ExifIFD`] && exif[`ExifIFD`].FocalPlaneYResolution || null,
        focalPlaneUnit: !!exif[`ExifIFD`] && exif[`ExifIFD`].FocalPlaneResolutionUnit || null,
        created: !!exif[`ExifIFD`] && exif[`ExifIFD`].DateTimeOriginal || null,
        modified: !!exif[`ExifIFD`] && exif[`ExifIFD`].ModifyDate || null,
        source: !!exif[`ExifIFD`] && exif[`ExifIFD`].FileSource || null,
        sceneType: !!exif[`ExifIFD`] && exif[`ExifIFD`].SceneType || null,
        sceneCaptureType: !!exif[`ExifIFD`] && exif[`ExifIFD`].SceneCaptureType || null,
        compression: !!exif[`IFD1`] && exif[`IFD1`].Compression || null
      }
    }

    info(`Successfully ran fetchPhotoExif`, { photoId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPhotoExif`, err)
  }
}

export default fetchPhotoExif
