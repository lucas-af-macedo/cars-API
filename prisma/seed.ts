import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.cars.findFirst();
  if (!event) {
    const HB20 = await prisma.cars.create({
      data: {
        model: "HB20",
        licensePlate: "ABC9090",
        year: "2001",
        color: "AZUL"
      },
    });

    const SONATA = await prisma.cars.create({
        data: {
          model: 'SONATA',
          licensePlate: 'EZD3035',
          year: "2018",
          color: 'PRETO'
        },
      });

      const X1 = await prisma.cars.create({
        data: {
          model: 'X1',
          licensePlate: 'FBI2231',
          year: "2018",
          color: 'BRANCO'
        },
      });

      const CIVIC = await prisma.cars.create({
        data: {
          model: "CIVIC",
          licensePlate: "LPA1019",
          year: "2021",
          color: "CINZA"
        },
      });

      const ONIX = await prisma.cars.create({
        data: {
          model: "ONIX",
          licensePlate: "HFA2713",
          year: "2023",
          color: "AMARELO"
        },
      });

      const EVOLUTION = await prisma.cars.create({
        data: {
          model: "EVOLUTION",
          licensePlate: "EPR6655",
          year: "2005",
          color: "CINZA"
        },
      });

      const UNO = await prisma.cars.create({
        data: {
          model: "UNO",
          licensePlate: "DMP7935",
          year: "2000",
          color: "PRETO"
        },
      });

      const car320i = await prisma.cars.create({
        data: {
          model: "320i",
          licensePlate: "LAS5546",
          year: "2017",
          color: "BRANCO"
        },
      });

      console.log({ HB20, SONATA, X1, CIVIC, ONIX, EVOLUTION, UNO, car320i });
  }

}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
