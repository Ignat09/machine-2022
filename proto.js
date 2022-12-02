"use strict";

function reoladPage() {  
  document.body.innerHTML = '<button onclick="multivare.run()">Включить мультиварку</button>' + ' ' + '<button onclick="cofeeMachine.run()">Включить кофеварку</button>';
  document.body.className = "bod";
  document.getElementsByClassName("bod")[0].style.background = "olive";
}

function Machine() {
  this.state = "stopped";
  this.time = 2000;
  this.timer = null;
  this.interval = null;
}

Machine.prototype.run = function () {
  this.state = "started";
  document.write("Начинаю работу...");
  document.write("Время приготовления - " + this.time + " ");
  this.interval = setInterval(
    function () {
      document.write(" | ");
    }.bind(this),
    1000
  );
  this.timer = setTimeout(this.onReady.bind(this), this.time);
  document.write(this.state);
};

Machine.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Готово! ");
  self.state = "stopped";
  document.write(self.state);
};

Machine.prototype.stop = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Принудительное выключение!");
  this.state = "stopped";
  document.write(this.state);
};

function CofeeMachine() {
  Machine.apply(this);
}

CofeeMachine.prototype = Object.create(Machine.prototype);
CofeeMachine.prototype.constructor = CofeeMachine;

CofeeMachine.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write(this.drink + " " + "Готово! ");
self.state = "stopped";
  document.write(self.state); 
  setTimeout(reoladPage, 2000);
};

CofeeMachine.prototype.run = function (drink) {
  drink = prompt("Какой напиток приготовить?(чай зеленый/черный, еспрессо, латте)");
    switch (drink) {
      case "еспрессо":
        this.drink = "еспрессо";
        this.time = 3000;
        Machine.prototype.run.apply(this);
        break;
        case "латте":
          this.drink = "латте";
          this.time = 5000;
          Machine.prototype.run.apply(this);
          break;
          case "чай зеленый":
            this.drink = "чай зеленый";
          this.time = 5000;
          Machine.prototype.run.apply(this);
          break;
          case "чай черный":
            this.drink = "чай черный";
          this.time = 6000;
          Machine.prototype.run.apply(this);
          break;
      default:
        alert("У нас такого напитка нет!");
        break;
    }
};

let cofeeMachine = new CofeeMachine();

function Multivare() {
  this.mode = "тушение";
  this.product = "мясо курицы";
  Machine.apply(this);
}

Multivare.prototype = Object.create(Machine.prototype);
Multivare.prototype.constructor = Multivare;

Multivare.prototype.run = function (mode, product) {
  mode = prompt("Какой режим включить?(тушение, варка, жарка, выпечка)");
  product = prompt("Какой продукт положить в мультиварку?");
  switch (mode) {
    case "тушение":
      this.mode = "тушеное";
      this.time = 5000;
      break;
      case "жарка":
        this.mode = "жареная";
        this.time = 7000;
        break;
        case "варка":
        this.mode = "вареное";
        this.time = 6000;
        break;
        case "выпечка":
        this.mode = "печеное";
        this.time = 7000;
        break;
    default:
      this.mode = "тушеное";
      this.time = 5000;
      break;
  }
  this.product = product;
  Machine.prototype.run.apply(this);
};

Multivare.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write(this.mode + " " + this.product + " " + "Готово! ");
self.state = "stopped";
  document.write(self.state); 
  setTimeout(reoladPage, 2000);
};

let multivare = new Multivare();