import {set} from 'cerebral/operators';
import uuid from 'uuid';

export const addLoadingStatus = (message, context, logType) => {
  const id = uuid.v4();
  return set(`state:main.loading_status.${id}`, {
    id,
    logType,
    context,
    message,
    created_at: performance.now(),
  });
};
