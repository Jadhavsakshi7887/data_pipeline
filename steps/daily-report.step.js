export const config = {
  name: "DailyReport",
  type: "cron",
  cron: "0 0 * * *",       
  emits: ["report.generated"] 
};

export const handler = async (_, { logger, emit, state }) => {
  const total = await state.getAll();

  logger.info("Daily report generated", {
    totalRuns: Object.keys(total).length
  });

  await emit({
    topic: "report.generated",
    data: {
      generatedAt: new Date().toISOString()
    }
  });
};
