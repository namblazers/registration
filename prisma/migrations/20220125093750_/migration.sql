-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
