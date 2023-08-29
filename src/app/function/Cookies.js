const Cookies = async () => {
  try {
    const cookies = await fetch(`/api/auth`);
    if (cookies.ok) {
      const data = await cookies.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    throw error;
  }
};

export default Cookies;