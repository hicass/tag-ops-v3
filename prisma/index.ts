import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Instantiate PrismaClient

async function main() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })

  console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect(); // Close the database connections when the script terminates
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect(); // Close the database connections when the script terminates
    process.exit(1);
  });
