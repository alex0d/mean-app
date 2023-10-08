module.exports = mongoose => {
   var schema = mongoose.Schema(
      {
        username: String,
        email: String,
        phone: String,
      },
      { timestamps: true }
    );
  
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Contact = mongoose.model("contact", schema);

  return Contact;
};