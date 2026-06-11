import {
    boolean,
  index,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

const role = pgEnum("role", ["user", "admin"]);

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).unique().notNull(),
    password: text("password"),
    avatarUrl: text("avatar_url"),
    isVerified: boolean("is_verified").default(false),
    role: role("role").default("user"),

    corsairUserId: varchar("corsair_user_id", { length: 255 }).unique(),
    corsairConnectionId: varchar("corsair_connection_id", { length: 255 }),

    lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date()),
  }
);

export const usersCorsairIdx = index("users_corsair_id_idx").on(users.corsairUserId); 
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;