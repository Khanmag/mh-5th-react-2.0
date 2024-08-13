const getComments = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    if (response.status !== 200) throw new Error("fetch error");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

const getPosts = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (response.status !== 200) throw new Error("fetch error");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
const getPostById = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (response.status !== 200) throw new Error("fetch error");
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
};

const getToDos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    if (response.status !== 200) throw new Error("fetch error");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export { getComments, getToDos, getPosts, getPostById };
