import {
    boolean,
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    jsonb,
  } from "drizzle-orm/pg-core"
  import type { AdapterAccountType } from "next-auth/adapters"

   
  export const users = pgTable("user", {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    bio : text("bio")
  })
   
  export const accounts = pgTable(
    "account",
    {
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      type: text("type").$type<AdapterAccountType>().notNull(),
      provider: text("provider").notNull(),
      providerAccountId: text("providerAccountId").notNull(),
      refresh_token: text("refresh_token"),
      access_token: text("access_token"),
      expires_at: integer("expires_at"),
      token_type: text("token_type"),
      scope: text("scope"),
      id_token: text("id_token"),
      session_state: text("session_state"),
    },
    (account) => [
      {
        compoundKey: primaryKey({
          columns: [account.provider, account.providerAccountId],
        }),
      },
    ]
  )
   
  export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  })
   
   
  export const authenticators = pgTable(
    "authenticator",
    {
      credentialID: text("credentialID").notNull().unique(),
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      providerAccountId: text("providerAccountId").notNull(),
      credentialPublicKey: text("credentialPublicKey").notNull(),
      counter: integer("counter").notNull(),
      credentialDeviceType: text("credentialDeviceType").notNull(),
      credentialBackedUp: boolean("credentialBackedUp").notNull(),
      transports: text("transports"),
    },
    (authenticator) => [
      {
        compositePK: primaryKey({
          columns: [authenticator.userId, authenticator.credentialID],
        }),
      },
    ]
  )


export interface PlanDetails {
  tripName: string;
  destination: string;
  duration: string | number;
  travelers: number | string;
  budget: string | { category: string; currency: string };
  dailyBudgetPerPerson?: string;
  itinerary: {
    day: number;
    theme: string;
    activities: { name: string; time: string; cost: number | string; tips?: string[] }[];
  }[];
  accommodation: { type: string; cost?: string; cost_per_night?: string; recommendations?: string[]; tips?: string[] };
  transportation: { type?: string; description?: string; cost?: string; estimated_cost_per_day?: string; tips?: string[] };
  important_notes?: string[];
  food?: { style?: string; estimated_cost_per_day?: string; recommendations?: string[]; tips?: string[] };
  currency?: string;
}

export const travelPlan = pgTable("travelPlan", {
  planId: text("planId").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("userId").notNull(),
  destination: text("destination").notNull(),
  groupSize: integer("groupSize").notNull(),
  budget: text("budget").notNull(),
  duration: integer("duration").notNull(),
  planDetails: jsonb("planDetails").$type<PlanDetails>().notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
});

export const queries = pgTable('queries',{
  name : text('name').notNull(),
  phone : text('phone').notNull(),
  email : text('email'),
  queriess : text('queriess'),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
})