import { PropertyProps } from "@/components/PropertyCard";
import { sampleProperties } from "./sampleProperties";

export type Property = PropertyProps;

// Export the first 3 properties for now to keep the file smaller
export const properties: Property[] = sampleProperties;
