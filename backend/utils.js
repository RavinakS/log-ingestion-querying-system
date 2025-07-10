const checkRequiredFields = (log) => {
  let requiredFieldsExists = true;
  const {
    level,
    message,
    resourceId,
    timestamp,
    traceId,
    commit,
    metadata,
    spanId,
  } = log;

  if (
    !level ||
    !message ||
    !resourceId ||
    !timestamp ||
    !traceId ||
    !commit ||
    !metadata ||
    !spanId
  ) {
    requiredFieldsExists = false;
  }

  return requiredFieldsExists;
};

module.exports = { checkRequiredFields };
