export interface DatabankInterface {
  id: string;
  firstName: string;
  lastName: string;
  featuredImage: string;
  dateOfShoot: string;
  location: string;
  gallery: {
    id: string;
    src: string;
  }[];
}

export interface GalleryInterface {
  id: string;
  src: string;
}

const databank = [
  {
    id: "m-01",
    firstName: "John",
    lastName: "Doe",
    featuredImage: "../../img/john/img9.jpg",
    dateOfShoot: "2012/04/30",
    location: "Byhaugen Barnahage",
    gallery: [
      { id: "m-img-8", src: "../../img/john/img9.jpg" },
      { id: "m-img-1", src: "../../img/john/img1.jpg" },
      { id: "m-img-2", src: "../../img/john/img2.jpg" },
      { id: "m-img-3", src: "../../img/john/img3.jpg" },
      { id: "m-img-4", src: "../../img/john/img4.jpg" },
      { id: "m-img-5", src: "../../img/john/img5.jpg" },
      { id: "m-img-6", src: "../../img/john/img6.jpg" },
      { id: "m-img-7", src: "../../img/john/img7.jpg" },
    ],
  },
  {
    id: "f-01",
    firstName: "Jane",
    lastName: "Doe",
    featuredImage: "../../img/jane/img9.jpg",
    dateOfShoot: "2012/04/30",
    location: "City Hall",
    gallery: [
      { id: "f-img-8", src: "../../img/jane/img9.jpg" },
      { id: "f-img-1", src: "../../img/jane/img1.jpg" },
      { id: "f-img-2", src: "../../img/jane/img2.jpg" },
      { id: "f-img-3", src: "../../img/jane/img3.jpg" },
      { id: "f-img-4", src: "../../img/jane/img4.jpg" },
      { id: "f-img-5", src: "../../img/jane/img5.jpg" },
      { id: "f-img-6", src: "../../img/jane/img6.jpg" },
      { id: "f-img-7", src: "../../img/jane/img7.jpg" },
    ],
  },
];

export default databank;
