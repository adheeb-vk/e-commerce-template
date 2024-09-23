export default async function get(path: string, data: any) {
  try {
    // API Here
    const response = await fetch(`https://fakestoreapi.com${path}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}