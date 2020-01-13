// 'use strict';

const zmq = require("zeromq");

// сперва хотел сделать по красоте но потратил много времени и отложил данный подход
//-------------------------------------------------------------------------------------
// const write = s => process.stdout.write(s);
// write('\x1Bc');

// const callbackf = callback => process.stdin.on('data', chunk => {
// write('\x1b[5;5H');
// write(`
//                       ┌────────────────────────────┐
//                       │ Login:                     │
//                       └────────────────────────────┘
// `);
// write('\x1b[2A\x1b[31C');
// });
const readline = require('readline');
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const id = {
  type: "login",
  email: "foo@bar.baz",
  pwd: "xxx",
  msg_id: getRandomInRange(1, 100)
}
rl.question('Enter your email: ', email => {
  console.log(`Hello, ${email}!`);
  id.email = email;
  rl.question('Enter your password Key: ', password => {
    console.log(`Key:, ${password}!`);
    id.pwd = password;
    run();
  });
  //rl.close();
});

async function run() {
  const sockSub = new zmq.Subscriber;
  const sockPub = new zmq.Publisher;

  sockSub.connect("tcp://127.0.0.1:3000");
  sockSub.subscribe("api_out");
  const resp = await sockPub.bind("tcp://127.0.0.1:3001");                     
  await new Promise(resolve => {setTimeout(resolve, 1000);});       // ждем подключения сервера
  console.log("Subscriber connected to port 3001");
  
      await sockPub.send(["api_in", JSON.stringify(id)]);
      for await (const [topic, msg] of sockSub) {
        let msgobj = JSON.parse(msg);
        let status = msgobj.status;
        console.log("received from server a message related to:", topic.toString(), "containing message:", msgobj);
        if(status == "ok") { console.log(status); } 
        else { console.log(msgobj.error) }
      }
}