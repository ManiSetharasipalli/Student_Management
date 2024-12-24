/*
  Warnings:

  - Added the required column `date_joined` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "date_joined" DATE NOT NULL,
ADD COLUMN     "last_login" TIMESTAMP(6);
