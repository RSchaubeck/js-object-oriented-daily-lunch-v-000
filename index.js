let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;
  }
}

let customerId = 0;

class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerId;
    this.name = name;
    if(neighborhood) {
      this.neighborhoodId = neighborhood.id;
    }
  }
}

let mealId = 0;

class Meal {
  constructor(title, price) {
    this.id = ++mealId
    this.title = title;
    this.price = price;
  }
}

class Delivery {
  constructor () {

  }
}
