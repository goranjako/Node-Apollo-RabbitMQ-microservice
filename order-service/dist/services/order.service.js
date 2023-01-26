"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _amqplib = _interopRequireDefault(require("amqplib"));
var _order = _interopRequireDefault(require("../models/order"));
var _express = require("express");
let channel;
class RabbitMQ {
  //create chn
  async Create(chann) {
    try {
      await channel.sendToQueue(chann, Buffer.from(JSON.stringify({
        msg: "Order Created"
      })));
    } catch (error) {
      console.log("Error in Connecting RabbitMQ!", error);
    }
  }
  //connect amqp
  async Conect() {
    try {
      const amqpServer = "amqp://localhost:5672";
      let connection = await _amqplib.default.connect(amqpServer);
      channel = await connection.createChannel();
      await channel.assertQueue("Product");
      console.log("Connecting RabbitMQ!");
      await this.Consum("Order");
    } catch (error) {
      console.log("Error in Connecting RabbitMQ!");
      process.exit(1);
    }
  }
  //amqp consum
  async Consum(ch) {
    let Buffer;
    let next;
    let ErrorHandler;
    try {
      channel.consume(ch, async data => {
        const userData = JSON.parse(data.content);
        channel.ack(data);
        const order = new _order.default({
          user: userData.data.user,
          products: userData.data.products,
          totalPrice: userData.data.totalPrice,
          quantity: userData.data.quantity
        });
        if (!order) {
          return next(new ErrorHandler("Order not found with this Id", 404));
        }
        const obj = await order.save();
        if (!obj) {
          return next(new ErrorHandler("Order not found with this Id", 404));
        }
        return await this.Create("Product");
      });
    } catch (error) {
      console.log("Error in Connecting RabbitMQ!", error);
    }
  }
}
var _default = new RabbitMQ();
exports.default = _default;