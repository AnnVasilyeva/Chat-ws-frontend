import Widget from './Widget';

const widget = new Widget('wss://chat-ws-heroku.herokuapp.com/ws');

// const widget = new Widget('ws://127.0.0.1:7070/ws'); для локальной проверки

widget.createForm();
