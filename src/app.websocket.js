const tradeReportController = require('./controllers/trade-report.controller');
const websocket = require('nodejs-websocket');

const PORT_WEBSOCKET = 3005;

//websocket
const server = websocket.createServer(function (connection) {
  connection.on('text', function (receive) {
    // simple object transformation (= add current time)
    const objectReceive = JSON.parse(receive);
    typeWebsocket(objectReceive);
    const newMsg = JSON.stringify(objectReceive);

    // echo message including the new field to all connected clients
    server.connections.forEach(function (connection) {
      connection.sendText(newMsg);
    });
  });

  connection.on('close', function () {
    console.log('Connection Websocket closed');
  });
}).listen(PORT_WEBSOCKET, function () {
  console.log(`Websocket running on ws://localhost:${PORT_WEBSOCKET}`);
});

function typeWebsocket(objectReceive) {
  switch (objectReceive.messageType) {
    case 'NEW_TRADE_REPORT':
      return tradeReportController.addTradeReport(objectReceive);
    case 'UPDATE_TRADE_REPORT':
      return tradeReportController.updateTradeReport(objectReceive);
    default:
      break;
  }
}