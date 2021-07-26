const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51JBwN6GcnXO3L2FUSyQKiKKVSPPeF8Cm4TXgsGIvSkStpVUOCZCVnYFlLatxG2RIzETNJu8U6yQjFbKDKD6sVJHd005LN0JXHP");

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Servicios kidosoft",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});
