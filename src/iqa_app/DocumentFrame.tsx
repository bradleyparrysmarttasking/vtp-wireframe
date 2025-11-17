import { Box, LoadingOverlay } from "@mantine/core";
import { useEffect, useState } from "react";
import { getUrl } from "aws-amplify/storage";

export function DocumentFrame({ document }: { document: any }) {
  const [isLoading, setIsLoading] = useState(true);
  const [documentUrl, setDocumentUrl] = useState("");

  const updateDocumentUrl = async () => {
    const result = await getUrl({
      key: document.key,
      options: {
        accessLevel: "guest", // can be 'private', 'protected', or 'guest' but defaults to `guest`
      },
    });

    setDocumentUrl(result.url.toString());
    setIsLoading(false);
  };

  useEffect(() => {
    updateDocumentUrl();
  }, [document.key]);

  return (
    <Box style={{ width: "100%", height: "80vh", position: "relative" }}>
      <LoadingOverlay visible={isLoading} />
      <iframe
        src={
          documentUrl
            ? documentUrl + "#navpanes=0&pagemode=none" //"#toolbar=0&navpanes=0&scrollbar=0&pagemode=none"
            : ""
        }
        style={{ width: "100%", height: "100%", border: "none" }}
        title="PDF Viewer"
      />
    </Box>
  );
}
