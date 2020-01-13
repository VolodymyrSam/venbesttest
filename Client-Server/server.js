/*
Решение задания подрозумевало использовать технологии и библиотеки прежде мне не известные.
За время выполнения задания, сутки, с нуля освоено следующее: zeromq, работа клиент - сервер на node js - js, освоил азы SQLite.
Также закреплены знания асинхронных функций.
Во время выполнения задания завершены все этапы, которые подрозумевали проверку выполнения.
На момент предоставления этой версии организована работа клиент-сервера
 только при соединением клиента последующем за запущеным сервером.
*/
'use strict';
const zmq = require("zeromq");
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) { return console.error(err.message); }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(function() {  
  db.run("CREATE TABLE IF NOT EXISTS Users (Params TEXT, Value TEXT)");  // INTEGER

  db.run("INSERT into Users(Params,Value) VALUES ('user_id', '1')");
  db.run("INSERT into Users(Params,Value) VALUES ('email', 'foo@bar.baz')");
  db.run("INSERT into Users(Params,Value) VALUES ('passw', 'xxx')");

  db.all("SELECT * from Users",function(err,rows){  
    if(err) { console.log(err); }  
    else{ console.log(rows); }  
  });
});

const idDB = {
  type: "login",
  email: "foo@bar.baz",
  pwd: "xxx",
  msg_id: 3
}
var answer = {
  msg_id:  "yyy",
  status:  "ok",
  user_id: "N",
  error:  "xxx"
}

async function run() {
  const sockSub = new zmq.Subscriber
  const sockPub = new zmq.Publisher 

  await sockPub.bind("tcp://127.0.0.1:3000");
  console.log("Publisher bound to port 3000");
  
  sockSub.connect("tcp://127.0.0.1:3001");
  sockSub.subscribe("api_in");
  
  for await (const [topic, msg] of sockSub) {
    let msg_id = JSON.parse(msg).msg_id;
    let email = JSON.parse(msg).email;
    let pwd = JSON.parse(msg).pwd;
    var pwddb;
    db.serialize(function() {  
      db.all("SELECT Value FROM Users where Params='passw'", function(err,rows){  
        if (err) { console.log(err); }
        else { 
          pwddb = rows[0].Value;
          console.log(rows);              
          console.log("received a message related to:", topic.toString(), "containing message:", JSON.parse(msg));
          console.log("sending a multipart message envelope");
          if(email == idDB.email && pwd === pwddb){
            answer.status = "ok";
            answer.msg_id = msg_id;
            answer.user_id = 2;
            delete answer.error;
            sockPub.send(["api_out", JSON.stringify(answer)]);
          } else {
            answer.msg_id = msg_id;
            delete answer.user_id;
            answer.status = "error";
            if(!email || !pwd){ answer.error = "WRONG_FORMAT"; } 
            else { answer.error = "WRONG_PWD"; }
            sockPub.send(["api_out", JSON.stringify(answer)]);
          }
        }
      });
    });
  }
}
run();
