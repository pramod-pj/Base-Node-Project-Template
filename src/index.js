const express = require('express');

const { ServerConfig } = require('./config/server-config');
const apiRoutes = require('./routes');
const { Logger } = require('winston');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`✅ Server running on port ${ServerConfig.PORT}`);
});

