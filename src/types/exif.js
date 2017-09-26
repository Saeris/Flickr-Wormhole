import { loadBrands } from "./loaders"
import { fetchCamerasByBrand, fetchPhotoExif } from "./resolvers"
import { Brand } from "./brand"
import { Camera } from "./camera"

export const Exif = new GqlObject({
  name: `Exif`,
  description: `EXIF Data for a Photo.`,
  fields: () => ({
    id: {
      type: GqlID,
      description: `ID of the Photo this EXIF Data belongs to.`
    },
    camera: {
      type: GqlString,
      description: `The make and model of the camera used to take this photo.`
    },
    make: {
      type: Brand,
      description: `The Brand of of Camera used to take this Photo.`,
      resolve: async type => type.make
        ? await loadBrands.load(`brands`)
          .then(results => results.filter(res => res.id === type.make.toLowerCase())[0])
        : null
    },
    model: {
      type: Camera,
      description: `The Camera used to take this Photo.`,
      resolve: async type => type.make
        ? await fetchCamerasByBrand(type.make.toLowerCase())
          .then(results => results.filter(res => res.id === type.model.toLowerCase().replace(` `, `_`))[0])
        : null
    },
    xResolution: {
      type: GqlString,
      description: `The horizontal image resolution of the image in Dots Per Inch.`
    },
    yResolution: {
      type: GqlString,
      description: `The vertical image resolution of the image in Dots Per Inch.`
    },
    software: {
      type: GqlString,
      description: `The image editing software used to modify this image. (Optional)`
    },
    shootingMode: {
      type: GqlString,
      description: `The exposure mode used to capture this image.`
    },
    exposure: {
      type: GqlString,
      description: `The exposure value used to caputre this image.`
    },
    aperture: {
      type: GqlString,
      description: `The aperature value used to caputre this image.`
    },
    iso: {
      type: GqlInt,
      description: `The ISO speed used to capture this image.`
    },
    brightness: {
      type: GqlFloat,
      description: `The Brightness value used to capture this image.`
    },
    bias: {
      type: GqlString,
      description: `The Exposure Bias setting used to capture this image.`
    },
    meteringMode: {
      type: GqlString,
      description: `The Metering Mode setting used to capture this image.`
    },
    whiteBalance: {
      type: GqlString,
      description: `The White Balance setting used to capture this image.`
    },
    flash: {
      type: GqlString,
      description: `The Flash settings used to capture this image.`
    },
    lensInfo: {
      type: GqlString,
      description: `Information about the lens used to capture this image.`
    },
    lensModel: {
      type: GqlString,
      description: `The Model name of the lens used to capture this image.`
    },
    focalLength: {
      type: GqlString,
      description: `The Focal Length of the lens used to capture this image.`
    },
    maxAperture: {
      type: GqlString,
      description: `The Maximum Aperture setting the lens used to capture this image is capable of.`
    },
    colorSpace: {
      type: GqlString,
      description: `The Color Space that this image is in.`
    },
    contrast: {
      type: GqlString,
      description: `The Contrast setting used to capture this image.`
    },
    saturation: {
      type: GqlString,
      description: `The Saturation setting used to capture this image.`
    },
    sharpness: {
      type: GqlString,
      description: `The Sharpness setting used to capture this image.`
    },
    digitalZoomRatio: {
      type: GqlString,
      description: `The Digital Zoom Ratio of the captured image.`
    },
    focalPlaneXResolution: {
      type: GqlFloat,
      description: `The horizontal focal plane resolution of the Camera.`
    },
    focalPlaneYResolution: {
      type: GqlFloat,
      description: `The vertical focal plane resolution of the Camera.`
    },
    focalPlaneUnit: {
      type: GqlString,
      description: `The Focal Plane Resolution unit of measurement.`
    },
    created: {
      type: GqlDateTime,
      description: `The Date and Time this image was captured.`
    },
    modified: {
      type: GqlDateTime,
      description: `The Date and Time this image was modified.`
    },
    source: {
      type: GqlString,
      description: `Where the image came from.`
    },
    sceneType: {
      type: GqlString,
      description: `How the image was created.`
    },
    sceneCaptureType: {
      type: GqlString,
      description: `The Scene Capture Type of the captured image.`
    },
    compression: {
      type: GqlString,
      description: `The compression settings used to save the image.`
    }
  })
})

export const Queries = {
  getPhotoExif: {
    type: Exif,
    args: {
      id: {
        type: new GqlNonNull(GqlID),
        description: `ID of the Photo to get EXIF data for.`
      }
    },
    resolve: (parent, args, context) => fetchPhotoExif(args.id)
  }
}

export const Definition = Exif

export default { Definition, Queries }
