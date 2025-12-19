export const config = {
  name: "CleanData",
  type: "event",
  subscribes: ["data.detected"],
  emits: ["data.cleaned"],
  flows: ['csv-analytics']

};

export const handler = async (input, { emit, logger }) => {
  const { rows, numericFields, categoricalFields } = input;

  if (!rows || rows.length === 0) {
    logger.warn("No rows to clean");
    return;
  }

  const cleanedRows = rows.filter(row =>
    Object.values(row).every(
      value => value !== null && value !== undefined
    )
  );

  const uniqueRows = Array.from(
    new Map(cleanedRows.map(row => [JSON.stringify(row), row])).values()
  );

  logger.info("Data cleaned", {
    before: rows.length,
    after: uniqueRows.length
  });

  await emit({
    topic: "data.cleaned",
    data: {
      rows: uniqueRows,
      numericFields,
      categoricalFields
    }
  });
};

