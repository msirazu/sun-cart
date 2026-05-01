import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_SC_DB_URI);

const db = client.db('sun-cart-db');

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    client
  }),
});