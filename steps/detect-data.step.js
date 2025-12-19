export const config = {
  name: "DetectData",
  type: "event",
  subscribes: ["data.uploaded"],
  emits: ["data.detected"],
  flows: ['csv-analytics']

};

export const handler = async (input, { emit, logger }) => {
  const rows = input.rows;

  if (!rows || rows.length === 0) {
    logger.warn("No rows to detect");
    return;
  }

  const sample = rows[0];

  const numericFields = [];
  const categoricalFields = [];

  for (const key of Object.keys(sample)) {
    const value = sample[key];

    if (typeof value === "number") {
      numericFields.push(key);
    } else {
      categoricalFields.push(key);
    }
  }

  logger.info("Data detected", {
    numericFields,
    categoricalFields
  });

  await emit({
    topic: "data.detected",
    data: {
      rows,
      numericFields,
      categoricalFields
    }
  });
};
