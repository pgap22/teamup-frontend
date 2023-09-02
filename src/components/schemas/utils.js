const mostrarZodError = (error) => {
  if (error.issues[0].unionErrors) {
    if (error.issues[0].unionErrors[0].issues[0].message) {
      return error.issues[0].unionErrors[0].issues[0].message;
    }
  }

  return error.issues[0].message;
};

export { mostrarZodError };
