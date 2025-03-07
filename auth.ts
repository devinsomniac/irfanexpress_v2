import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { accounts, sessions, users } from "@/lib/db/schema"
import { db } from "./lib/db/index"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:DrizzleAdapter(db,{
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
  }),
  providers: [Google],
})