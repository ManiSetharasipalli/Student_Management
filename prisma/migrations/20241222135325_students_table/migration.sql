-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "student_name" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "courses" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_id_key" ON "Students"("id");
