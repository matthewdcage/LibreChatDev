const { createAssistantEndpoint } = require('./assistants');

// ... other imports ...

const openAIAssistants = createAssistantEndpoint('openAIAssistants', {
  // Add any OpenAI-specific configuration here
});

const inciteAssistants = createAssistantEndpoint('inciteAssistants', {
  // Add any Incite-specific configuration here
});

const yourNewEndpoint = createAssistantEndpoint('yourNewEndpoint', {
  // Add any specific configuration for your new endpoint here
});

module.exports = {
  // ... other endpoints ...
  openAIAssistants,
  inciteAssistants,
  yourNewEndpoint,
};
