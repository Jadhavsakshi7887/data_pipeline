export const config = {
  name: "VisualizeData",
  type: "event",
  subscribes: ["data.cleaned"],
  emits: ["data.visualized"],
  flows: ['csv-analytics']

};

export const handler = async (input, { emit, logger }) => {
  const { rows, numericFields, categoricalFields } = input;

  if (!rows || rows.length === 0) {
    logger.warn("No data to visualize");
    return;
  }

  const charts = [];

  for (const field of numericFields) {
    charts.push({
      type: "line",
      field,
      data: rows.map(r => r[field])
    });
  }

  for (const field of categoricalFields) {
    const counts = {};

    rows.forEach(row => {
      counts[row[field]] = (counts[row[field]] || 0) + 1;
    });

    charts.push({
      type: "bar",
      field,
      data: counts
    });
  }

  logger.info("Charts generated", { count: charts.length });

  await emit({
    topic: "data.visualized",
    data: {
      charts
    }
  });
};