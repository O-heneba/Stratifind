import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Upload CV File
 */
export const uploadCV = async (file, uid) => {
  const fileRef = ref(
    storage,
    `cvs/${uid}/${Date.now()}_${file.name}`
  );

  await uploadBytes(fileRef, file);

  const downloadURL = await getDownloadURL(fileRef);

  return downloadURL;
};
