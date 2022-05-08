-- AlterTable
ALTER TABLE `authors` ADD COLUMN `createById` INTEGER NULL;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Authors` ADD CONSTRAINT `Authors_createById_fkey` FOREIGN KEY (`createById`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
