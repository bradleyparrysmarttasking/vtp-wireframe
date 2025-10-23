import { FileInput, Stack } from "@mantine/core";
import { useDocumentUpload } from "./useDocumentUpload";
import { Button, Heading } from "govuk-react";

export function DocumentUpload() {
  const { selectedFile, setSelectedFile, uploadDataInBrowser, uploadedFiles } =
    useDocumentUpload();

  console.log(uploadedFiles);

  return (
    <Stack>
      <Heading as="h1" size={16}>
        Upload Document
      </Heading>
      <FileInput
        label="Upload Document"
        onChange={(file) => setSelectedFile(file)}
      />
      <Button
        disabled={!selectedFile}
        onClick={() => uploadDataInBrowser(selectedFile)}
      >
        Upload
      </Button>
      {JSON.stringify(uploadedFiles)}
    </Stack>
  );
}
