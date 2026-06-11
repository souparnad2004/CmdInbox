import {
  boolean,
  index,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  uniqueIndex,
} from "drizzle-orm/pg-core";

import { users } from "./user";

export const connectedAccounts = pgTable("connected_accounts", {
  id: uuid("id").primaryKey().defaultRandom(),

  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),

  provider: varchar("provider", { length: 50 }).notNull(),

  email: varchar("email", { length: 255 }).notNull(),

  corsairConnectionId: varchar("corsair_connection_id", {
    length: 255,
  }),
  refreshToken: text("refresh_token"),
  tokenExpiresAt: timestamp("token_expires_at", {
    withTimezone: true,
  }),

  isPrimary: boolean("is_primary").default(false),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

export const accountsUserIdx = index("accounts_user_id_idx").on(
  connectedAccounts.userId,
);

export const accountsEmailProviderIdx = uniqueIndex(
  "accounts_email_provider_idx",
).on(connectedAccounts.email, connectedAccounts.provider);
