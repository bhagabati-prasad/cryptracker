const { connect } = require('mongoose');

module.exports = async () => {
  try {
    const conn = await connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to database: ${conn.connection.host}...`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
