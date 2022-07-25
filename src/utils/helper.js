export const isExist = (value) =>
  value !== null && value !== "" && typeof value !== "undefined";

export const isEmpty = (value) => !isExist(value);

export const sleep = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

// https://stackoverflow.com/questions/19999388/check-if-user-is-using-ie
export const isInternetExplorer = () =>
  window.navigator.userAgent.indexOf("MSIE ") > 0 ||
  window.navigator.userAgent.indexOf("Trident/") > 0;

const { IMAGE_ENDPOINT } = process.env;

export const getImageUrl = (filename) => ({
  main: `${IMAGE_ENDPOINT}/${filename}`,
  thumbnail: `${IMAGE_ENDPOINT}/thumbnail/${filename}`,
});

export const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    // eslint-disable-next-line no-param-reassign
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});

export const scrollToOffset = (offset = 0, behavior = "smooth") => {
  console.log("hihihi", offset);
  window.scrollTo({
    behavior,
    top: offset,
  });
};

export const scrollToRef = (ref = null, offset = 0) => {
  if (ref && ref.current) {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop + offset,
    });
  } else {
    window.scrollTo({
      behavior: "smooth",
      top: offset,
    });
  }
};
