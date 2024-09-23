"use client";

export default function getClient(path: string) {
  try {
    return new Promise(function (resolve, reject) {
      // API Here
      fetch(`https://fakestoreapi.com${path}`, {
        cache: "no-store",
      })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
