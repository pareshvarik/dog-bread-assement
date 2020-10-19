import axios from "axios";
export function getAllDogsList() {
  return axios.get("https://dog.ceo/api/breeds/list/all");
}
export function getDogRandomImage(dogname) {
  return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random`);
}
export function getAllDogImage(dogname, subbreedname) {
  if (subbreedname == undefined) {
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images`);
  } else {
    return axios.get(
      `https://dog.ceo/api/breed/${dogname}/${subbreedname}/images`
    );
  }
}
export function getHomeDogRandomImage() {
  return axios.get(`https://dog.ceo/api/breeds/image/random/48`);
}

// export function getAllBread() {
//   return axios.get(`https://dog.ceo/api/breeds/list/all`);
// }
// export function getRandomImg(breed_name) {
//   return axios.get(`https://dog.ceo/api/breed/${breed_name}/images/random`);
// }

// export function getBreadImg(name) {
//   return axios.get(`https://dog.ceo/api/breed/${name}/images`);
// }
