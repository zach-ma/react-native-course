import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer q8ELYNI7VEbVD9fm5WU1XzFI5pOrGEXfZAgJFQg78PxHa_vmziKHjXYVemrHPPrnBM3kFqXhW1wvQWQEVK3gsfrk8pxMK-OsM-K-POwuY1wlHDXcCag7_dya3dHjYHYx",
  },
});

// yelp.get("/search");
