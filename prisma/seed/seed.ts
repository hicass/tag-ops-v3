import { PrismaClient, User, Post } from '@prisma/client';
import postData from './post-data';

const prisma = new PrismaClient(); // Instantiate PrismaClient

async function seedPostsToUser(userId: number, postData: { content: string }[]) {
  try {
    const user: User | null = await prisma.user.findUnique({
      where: { id: userId },
    });

    if(!user) {
      console.error(`User with ID ${userId} not found.`);
      return;
    }

    const posts: Post[] = await Promise.all(postData.map(async (post) => {
      return await prisma.post.create({
        data: {
          content: post.content,
          author: { connect: { id: userId } },
        },
      });
    }));

    console.log(`Successfully seeded ${posts.length} posts to user with ID ${userId}!`);
  } catch (error) {
    console.error('Error seeding posts:', error);
  } finally {
    await prisma.$disconnect();
  }
}

const userId: number = 1

seedPostsToUser(userId, postData)
  .then(async () => {
    await prisma.$disconnect(); // Close the database connections when the script terminates
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect(); // Close the database connections when the script terminates
    process.exit(1);
  });
