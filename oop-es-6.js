class Animal {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }
  voice() {
    console.log("Gav Gav!!!!", this.name);
  }
}

const dog = new Animal({ name: "Sharik", age: "22" });

class Cat extends Animal {
  constructor(options) {
    super(options);
    this.name = options.name;
    this.type = "cat";
  }
  voice() {
    super.voice();
    console.log(this.name + "myay");
  }
}

// const cat = new Cat({ name: "Murzik", age: "18" });


//Custom array method
Array.prototype.myFilter = function() {
    return this.filter.apply(this, arguments)
}
console.log(["Apple", "Samsung", "Honor", "Xiaomi"].myFilter(phone => phone === "Samsung"))

//Custom HTML tag
String.prototype.toTag = function(tagName) {
    return `<${tagName}>${this}</${tagName}>`
}
console.log("MyTagName".toTag('Custom-Tag-Name'))

//Custom BigInt
Number.prototype.toBigInt = function() {
    return BigInt(this)
}
const num = 33
console.log(num.toBigInt())