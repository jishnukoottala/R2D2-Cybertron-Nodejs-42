ALTER TABLE "posts_table" DROP CONSTRAINT "posts_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "posts_table" DROP COLUMN IF EXISTS "user_id";