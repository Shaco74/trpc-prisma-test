/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const firstPostId = '5c03994c-fc16-47e0-bd02-d218a370a078';
  await prisma.post.upsert({
    where: {
      id: firstPostId,
    },
    create: {
      id: firstPostId,
      title: 'First Post',
      text: 'This is an example post generated from `prisma/seed.ts`',
    },
    update: {},
  });

  const firstCompanyID = '12e311-fc16-47e0-bd02-d218a370a078';

  // create initial company
  await prisma.company.upsert({
    where: {
      id: firstCompanyID,
    },
    create: {
      id: firstCompanyID,
      name: 'First Company',
      catalog: {
        create: {
          name: 'First Catalog',
          categories: {
            create: {
              name: 'First Category',
              description:
                'This is an example category generated from `prisma/seed.ts`',
              products: {
                create: {
                  name: 'First Product',
                  description:
                    'This is an example product generated from `prisma/seed.ts`',
                  price: 19.99,
                },
              },
            },
          },
        },
      },
    },
    update: {},
  });


}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
