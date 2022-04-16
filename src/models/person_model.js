const { default: mongoose } = require("mongoose")

const personSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },

  lastName:{
    type: String,
    required: true
  },

  age:{
    type: Number,
    required: true
  },

  address:{
    type: Object,
    required: true,
      city:{
        type: String,
        required: true,
      },
      zip_code:{
        type: String,
        required: true,
      },
  },

});

module.exports = mongoose.model('PeopleCollection', personSchema)