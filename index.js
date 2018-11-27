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
    this.id = ++customerId
  }
}

class Meal {
  constructor() {

  }
}

class Delivery {
  constructor () {

  }
}
