var candies = [];
var id = 1;

module.exports = {
  all: function() {
    return candies;
  },

  find: function(idx) {
    return candies.filter(function(candy) {
      return candy.id == idx;
    })[0];
  },

  create: function(data) {
    candy = {
      id: id,
      name: data.name,
      color: data.color
    };
    id++;
    candies.push(candy);

    return candy;
  },

  update: function(idx, data) {
    candy = candies.filter(function(candy) {
      return candy.id == idx;
    })[0];

    if(!candy) {
      return false;
    }

    candy.name = data.name || candy.name;
    candy.color = data.color || candy.color;

    return candy;
  },

  destroy: function(idx) {
    var deleted = false;
    for(var i in candies) {
      if(candies[i].id == idx) {
        delete candies[i];
        deleted = true;
      }
    }

    return deleted;
  }
};