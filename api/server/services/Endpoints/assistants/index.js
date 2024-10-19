const addTitle = require('./addTitle');
const buildOptions = require('./buildOptions');
const initializeClient = require('./initializeClient');

// Add a new function to create assistant endpoints
const createAssistantEndpoint = (name, config) => {
  return {
    name,
    addTitle,
    buildOptions,
    initializeClient: (params) => initializeClient({ ...params, endpointName: name }),
    ...config,
  };
};

module.exports = {
  addTitle,
  buildOptions,
  initializeClient,
  createAssistantEndpoint,
};
