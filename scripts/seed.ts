const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "IT & Software",
        subCategories: {
          create: [
            { name: "Web Development" },
            { name: "Data Science" },
            { name: "Cybersecurity" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Business",
        subCategories: {
          create: [
            { name: "E-Commerce" },
            { name: "Marketing" },
            { name: "Finance" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Science",
        subCategories: {
          create: [
            { name: "Mathematics" },
            { name: "Biology" },
            { name: "Chemistry" },
            { name: "Physics" },
            { name: "Geology" },
            { name: "Food Science" },
            { name: "Computer Science" },
            { name: "Pylosophy" },
            { name: "Math Mechanics" },
            { name: "Futher Mathematics" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Social Science",
        subCategories: {
          create: [
            { name: "Economics" },
            { name: "Geography" },
            { name: "Citizenship" },
            { name: "Others" },
          ],
        },
      },

      {
        name: "Arts",
        subCategories: {
          create: [
            { name: "Literature" },
            { name: "History" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Languages",
        subCategories: {
          create: [
            { name: "English" },
            { name: "French" },
            { name: "German" },
            { name: "spanish" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Design",
        subCategories: {
          create: [
            { name: "Graphic Design" },
            { name: "3D & Animation" },
            { name: "Interior Design" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Health",
        subCategories: {
          create: [
            { name: "Fitness" },
            { name: "Yoga" },
            { name: "Nutrition" },
            { name: "Others" },
          ],
        },
      },
    ];

    // Sequentially create each category with its subcategories
    for (const category of categories) {
      await database.category.create({
        data: {
          name: category.name,
          subCategories: category.subCategories,
        },
        include: {
          subCategories: true,
        },
      });
    }

    await database.level.createMany({
      data: [
        { name: "Beginner" },
        { name: "Intermediate" },
        { name: "Expert" },
        { name: "Advance Level" },
        { name: "Ordinary Level" },
        { name: "Masters degree" },
        { name: "Bachelors degree" },
        { name: "Level 1" },
        { name: "Higher National Diploma" },
        { name: "Higher Technitian Diploma" },
        { name: "FSLC" },
        { name: "All levels" },
      ],
    });

    console.log("Seeding successfully");
  } catch (error) {
    console.log("Seeding failed", error);
  } finally {
    await database.$disconnect();
  }
}

main();
