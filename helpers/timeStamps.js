export function getTimesStamps(pastIntervalInMinutes) {
  const currentTimeStamp = Date.now();
  const pastTimeStamp = currentTimeStamp - pastIntervalInMinutes * 60 * 1000;

  return { currentTimeStamp, pastTimeStamp };
}
