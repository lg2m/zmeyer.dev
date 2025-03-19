import { boolean, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  draft: boolean("draft").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  authorId: serial("author_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull().unique(),
  slug: varchar("slug", { length: 50 }).notNull().unique(),
});

// Junction table for posts and tags (many-to-many)
export const postsTags = pgTable("posts_tags", {
  postId: serial("post_id")
    .references(() => posts.id)
    .notNull(),
  tagId: serial("tag_id")
    .references(() => tags.id)
    .notNull(),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const insertPostSchema = createInsertSchema(posts);
export const selectPostSchema = createSelectSchema(posts);
export const insertTagSchema = createInsertSchema(tags);
export const selectTagSchema = createSelectSchema(tags);

export const createPostSchema = insertPostSchema.extend({
  tags: z.array(z.number()).optional(),
});
export const updatePostSchema = createPostSchema.partial();

export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof insertUserSchema>;
export type Post = z.infer<typeof selectPostSchema>;
export type NewPost = z.infer<typeof createPostSchema>;
export type UpdatePost = z.infer<typeof updatePostSchema>;
export type Tag = z.infer<typeof selectTagSchema>;
export type NewTag = z.infer<typeof insertTagSchema>;
