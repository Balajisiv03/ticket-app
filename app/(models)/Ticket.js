import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket =
  mongoose.models.tickets || mongoose.model("tickets", ticketSchema);
export default Ticket;
