import { fetchPhotoExif, createFilter, createOrder, DateRange } from "@/resolvers"
import { Photo } from "./photo"
import { Brand } from "./brand"
import { Camera } from "./camera"

export const Exif = new GqlObject({
  name: `Exif`,
  description: `EXIF Data for a Photo.`,
  fields: () => ({
    id: globalId(`Exif`),
    photo: {
      type: Photo,
      description: `The Photo this EXIF Data belongs to.`,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: ({ photoId }, args, { photo }) => photo.load(photoId)
    },
    camera: {
      type: GqlString,
      description: `The make and model of the camera used to take this photo.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A camera make and model identifier, or an array of them.`
      }
    },
    make: {
      type: Brand,
      description: `The Brand of of Camera used to take this Photo.`,
      sortable: true,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: async({ make }, args, { brands }) => !!make
        ? await brands.load(`brands`)
          .then(results => results.filter(({ id }) => id === make.toLowerCase())[0])
        : null
    },
    model: {
      type: Camera,
      description: `The Camera used to take this Photo.`,
      sortable: true,
      complexity: (args, childComplexity) => childComplexity * 10,
      resolve: async({ make, model }, args, { cameras }) => !!make
        ? await cameras.load(make.toLowerCase())
          .then(results => results.filter(({ id }) => id === model.toLowerCase().replace(` `, `_`))[0])
        : null
    },
    xResolution: {
      type: GqlString,
      description: `The horizontal image resolution of the image in Dots Per Inch.`,
      sortable: true
    },
    yResolution: {
      type: GqlString,
      description: `The vertical image resolution of the image in Dots Per Inch.`,
      sortable: true
    },
    software: {
      type: GqlString,
      description: `The image editing software used to modify this image. (Optional)`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A software name or a list of software names.`
      }
    },
    shootingMode: {
      type: GqlString,
      description: `The exposure mode used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A shooting mode or a list of shooting modes.`
      }
    },
    exposure: {
      type: GqlString,
      description: `The exposure value used to caputre this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An exposure value or a list of exposure values.`
      }
    },
    aperture: {
      type: GqlString,
      description: `The aperature value used to caputre this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An aperture value or a list of aperture values.`
      }
    },
    iso: {
      type: GqlInt,
      description: `The ISO speed used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlInt),
        description: `An iso value or a list of iso values.`
      }
    },
    brightness: {
      type: GqlFloat,
      description: `The Brightness value used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlFloat),
        description: `A brightness value or a list of brightness values.`
      }
    },
    bias: {
      type: GqlString,
      description: `The Exposure Bias setting used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `An exposure bias setting or a list of exposure bias settings.`
      }
    },
    meteringMode: {
      type: GqlString,
      description: `The Metering Mode setting used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A metering mode setting or a list of metering mode settings.`
      }
    },
    whiteBalance: {
      type: GqlString,
      description: `The White Balance setting used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A white balance setting or a list of white balance settings.`
      }
    },
    flash: {
      type: GqlString,
      description: `The Flash settings used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A flash setting value or a list of flash setting values.`
      }
    },
    lensInfo: {
      type: GqlString,
      description: `Information about the lens used to capture this image.`,
      sortable: true
    },
    lensModel: {
      type: GqlString,
      description: `The Model name of the lens used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A lens model name or a list of lens model names.`
      }
    },
    focalLength: {
      type: GqlString,
      description: `The Focal Length of the lens used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A focal length or a list of focal lengths.`
      }
    },
    maxAperture: {
      type: GqlString,
      description: `The Maximum Aperture setting the lens used to capture this image is capable of.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A maximum aperture setting or a list of maximum aperture settings.`
      }
    },
    colorSpace: {
      type: GqlString,
      description: `The Color Space that this image is in.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A color space or a list of color spaces.`
      }
    },
    contrast: {
      type: GqlString,
      description: `The Contrast setting used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A contract setting or a list of contract settings.`
      }
    },
    saturation: {
      type: GqlString,
      description: `The Saturation setting used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A saturation setting or a list of saturation settings.`
      }
    },
    sharpness: {
      type: GqlString,
      description: `The Sharpness setting used to capture this image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A sharpness setting or a list of sharpness settings.`
      }
    },
    digitalZoomRatio: {
      type: GqlString,
      description: `The Digital Zoom Ratio of the captured image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A digital zoom ratio or a list of digital zoom ratios.`
      }
    },
    focalPlaneXResolution: {
      type: GqlFloat,
      description: `The horizontal focal plane resolution of the Camera.`,
      sortable: true
    },
    focalPlaneYResolution: {
      type: GqlFloat,
      description: `The vertical focal plane resolution of the Camera.`,
      sortable: true
    },
    focalPlaneUnit: {
      type: GqlString,
      description: `The Focal Plane Resolution unit of measurement.`,
      sortable: true
    },
    created: {
      type: GqlDateTime,
      description: `The Date and Time this image was captured.`,
      sortable: true,
      filter: {
        type: DateRange,
        description: `A date to filter against, or a start and an end date.`
      }
    },
    modified: {
      type: GqlDateTime,
      description: `The Date and Time this image was modified.`,
      sortable: true,
      filter: {
        type: DateRange,
        description: `A date to filter against, or a start and an end date.`
      }
    },
    source: {
      type: GqlString,
      description: `Where the image came from.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A source or a list of sources.`
      }
    },
    sceneType: {
      type: GqlString,
      description: `How the image was created.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A scene type or a list of scene types.`
      }
    },
    sceneCaptureType: {
      type: GqlString,
      description: `The Scene Capture Type of the captured image.`,
      sortable: true,
      filter: {
        type: new GqlList(GqlString),
        description: `A scene capture type or a list of scene capture types.`
      }
    },
    compression: {
      type: GqlString,
      description: `The compression settings used to save the image.`,
      sortable: true
    }
  })
})

export const ExifFilter = createFilter(Exif)
export const ExifOrder = createOrder(Exif)

export const Queries = {
  exif: {
    type: Exif,
    description: `Gets the EXIF data for the given Photo.`,
    args: {
      photo: {
        type: new GqlNonNull(GqlID),
        description: `ID of the Photo to get EXIF data for. (Required)`
      }
    },
    resolve: (parent, { photo: photoId }, { flickr }) => fetchPhotoExif({ flickr, photoId })
  }
}

export const Definition = Exif

export default { Definition, Queries }
