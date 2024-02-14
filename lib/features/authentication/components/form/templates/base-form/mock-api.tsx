const mockApi = async (duration: number = 1500) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, duration);
  });
};

export { mockApi };
