// src/api.js

export const fetchAboutUsData = () => {
  return Promise.resolve({
    title: "About Us",
    content: "This is a dummy About Us page content.",
  });
};

export const fetchMinisterData = () => {
  return Promise.resolve({
    name: "John Doe",
    position: "Minister of Health",
    bio: "This is a dummy bio for the minister.",
  });
};

export const fetchStateMinisterData = () => {
  return Promise.resolve({
    name: "Jane Smith",
    position: "State Minister of Health",
    bio: "This is a dummy bio for the state minister.",
  });
};
