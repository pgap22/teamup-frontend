import { AxiosError } from "axios";

export const throwError = (error) => {
  if (error instanceof AxiosError) {
    throw error.response.data.data.error;
  }
};

export const headers = () => {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
};

export const headersForm = () => {
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
};

export function convertirTamaño(bytes) {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;
  const gigabyte = megabyte * 1024;

  if (bytes < kilobyte) {
    return bytes + "B";
  } else if (bytes < megabyte) {
    return Math.floor(bytes / kilobyte) + "KB";
  } else if (bytes < gigabyte) {
    return Math.floor(bytes / megabyte) + "MB";
  } else {
    return Math.floor(bytes / gigabyte) + "GB";
  }
}

export const convertArrayToFileList = (fileArray) => {
  const dataTransfer = new DataTransfer();
  fileArray.forEach((file) => {
    dataTransfer.items.add(file);
  });

  return dataTransfer.files;
};
