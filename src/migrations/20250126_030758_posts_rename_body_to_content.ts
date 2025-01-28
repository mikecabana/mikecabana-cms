import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" RENAME COLUMN "body" TO "content";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_body" TO "version_content";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" RENAME COLUMN "content" TO "body";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_content" TO "version_body";`)
}
