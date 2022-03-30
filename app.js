let ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusd@trade');
ws.onmessage = (event) => {
    console.log(event.data);
}