import {
  text,
  boolean,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
    id: text("id").primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow()
})
