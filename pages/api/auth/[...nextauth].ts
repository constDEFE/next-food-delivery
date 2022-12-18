import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firebaseConfig } from "../../../firebase";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: FirestoreAdapter(firebaseConfig),
  secret: process.env.JWT_SECRET,
});
