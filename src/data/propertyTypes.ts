
export const propertyTypes = [
  "Apartment",
  "Villa", 
  "Bungalow",
  "Penthouse",
  "Cottage",
  "Studio",
  "Independent House",
  "Builder Floor",
  "Plot",
  "Commercial"
] as const;

export type PropertyType = typeof propertyTypes[number];
