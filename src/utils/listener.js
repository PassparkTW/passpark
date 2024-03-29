export const createSocket = ({ onOpen, onMessage }) => {
  const socket = new WebSocket(process.env.REACT_APP_WS_ENDPOINT);
  socket.onopen = () => {
    onOpen();
  }
  socket.onclose = () => {
    console.log('disconnected from websocket');
  }
  socket.onmessage = (message) => {
    if (message.data === 'OK') {
      return;
    }
    onMessage(JSON.parse(message.data));
  }
  return socket;
}

export const subscribeTask = ({ socket, taskId }) => {
  socket.send(JSON.stringify({
    action: 'subscribe',
    body: JSON.stringify({
      taskId
    })
  }));
}