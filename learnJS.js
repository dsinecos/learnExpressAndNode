var prototypeObject = {
  property1: "Value 1",
  property2: "Value 2",
  property3: "Value 3",
  
  method1: function() {},
  method2: function() {},

}

var childObject = Object.create(prototypeObject);
//childObject.property4 = "Value 4";

console.log(childObject);
console.log(childObject.__proto__);
console.log(childObject.property1);
console.log("-----------------------");

function ctor() {
  this.fproperty1 = "Value 1";
  this.fproperty2 = "Value 2";
  this.fproperty3 = "Value 3";
}

ctor.prototype.method1 = function() {};
ctor.prototype.method2 = function() {};
ctor.prototype.fproperty4 = "Value 4";
ctor.prototype.fproperty5 = {};
ctor.prototype.fproperty5.nestProperty6 = "Value 6";

console.log("\n");
console.log("-----------------------");
console.log("ctor prototype object");
console.log(ctor.prototype);

var ctorObject = new ctor();

console.log("\n");
console.log(ctorObject);
console.log(ctorObject.__proto__);
console.log(ctorObject.fproperty1);
console.log(ctorObject.fproperty4);
console.log(ctor.prototype.fproperty5.nestProperty6);
console.log("-----------------------");

var test = {};
test.__proto__ = prototypeObject;

console.log("\n");
console.log("This is the test object");
console.log(test);
console.log(test.__proto__);
console.log(test.property1);