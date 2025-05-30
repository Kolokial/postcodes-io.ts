import { PostcodeCodes } from './PostcodeCodes'

export interface PostcodeResult {
  postcode: string
  quality: number
  eastings: number
  northings: number
  country: string
  nhs_ha: string
  longitude: number
  latitude: number
  european_electoral_region: string
  primary_care_trust: string
  region: string
  lsoa: string
  msoa: string
  incode: string
  outcode: string
  parliamentary_constituency: string
  parliamentary_constituency_2024: string
  admin_district: string
  parish: string
  admin_county: string
  date_of_introduction: string
  admin_ward: string
  ced: string
  ccg: string
  nuts: string
  pfa: string
  codes: PostcodeCodes
}
