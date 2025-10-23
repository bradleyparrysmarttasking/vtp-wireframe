import { list, uploadData } from "aws-amplify/storage";
import { useEffect, useState } from "react";

export function useDocumentUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const uploadDataInBrowser = async (file: File) => {
    console.log(file);
    try {
      const { result } = await uploadData({
        // @ts-ignore
        key: "documents/" + file.name.replace(/ /g, "_"),
        data: file,
        options: {
          accessLevel: "guest", // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          contentType: file.type,
        },
      });

      console.log(result);
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  const listFiles = async () => {
    try {
      const result = await list({
        // @ts-ignore
        path: "public/documents/",
      });
      // @ts-ignore
      setUploadedFiles(result.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listFiles();
  }, []);

  return { uploadDataInBrowser, uploadedFiles, selectedFile, setSelectedFile };
}
