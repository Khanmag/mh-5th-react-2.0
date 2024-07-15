const getComments = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export { getComments };
