export const config = {
  name: "UploadData",
  type: "api",
  path: "/upload",
  method: "POST",
  emits: ["data.uploaded"],
  flows: ['csv-analytics']

};

export const handler = async (req, { emit, logger }) => {
  const { data } = req.body || {};

  if (!data) {
    return {
      status: 400,
      body: {
        error: "No data provided. Send JSON with a `data` field."
      }
    };
  }

  logger.info("Data received", { rows: data.length });

  await emit({
    topic: "data.uploaded",
    data: {
      rows: data
    }
  });

  return {
    status: 200,
    body: {
      message: " done Data uploaded successfully",
      rowsReceived: data.length
    }
  };
};