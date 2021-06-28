//Interface for Stay Listing Request with Fitlers and Pagination
export interface stayListingReq {
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  amenities?: string[] | null;
  page?: number;
}
