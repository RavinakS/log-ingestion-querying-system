const checkRequiredFields = (log) => {
  let requiredFieldsExists = true;
  const { level, message, resourceId, timestamp, traceId, commit, metadata } =
    log;

  if (
    !level ||
    !message ||
    !resourceId ||
    !timestamp ||
    !traceId ||
    !commit ||
    metadata
  ) {
    requiredFieldsExists = false;
  }

  return requiredFieldsExists;
};

module.exports = { checkRequiredFields };
