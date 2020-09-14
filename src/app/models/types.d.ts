interface User {
  address: Address;
  id: number;
  name: string;
  phone: string;
  username: string;
  email: string;
  website: string;
}

interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}

interface ApiResponse<T> {
  count: number;
  previous: string | null;
  next: string | null;
  content: T;
}
