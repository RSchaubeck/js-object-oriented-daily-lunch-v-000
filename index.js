let store = [{ deliveries: [], meals: [], customers: [], employers: []}]

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

    store.customers.push(this);
  }
}

let mealId = 0;

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;

    store.meals.push(this);
  }
  static byPrice() {
    console.log(store.meals);
    let i = 0;
    store.sort(function(a, b) {
      return a.meals[i++].price - b.meals[++i].price;
    });

  }
}

let deliveryId = 0;

class Delivery {
  constructor (mealId, neighborhoodId, customerId) {
    this.id = ++deliveryId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;

    store.deliveries.push(this);
  }
}

let employerId = 0;

class Employer {
  constructor(name) {
    this.id = ++employerId;
    this.name = name;

    store.employers.push(this);
  }
}
