import prisma from "../config/database.js";

async function getCars() {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await prisma.cars.findUnique({
    where: {
      id
    }
  });
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prisma.cars.findUnique({where: {licensePlate}});
  return data;
}

async function upsertCar(model: string, licensePlate: string, year: string, color: string, id?: number) {
  await prisma.cars.upsert({
    where:{
      id: id || 0
    },
    update:{
      model,
      licensePlate,
      year,
      color
    },
    create: {
      model,
      licensePlate,
      year,
      color
    }
  })
}

async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: {id}
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  upsertCar,
  deleteCar
}

export default carRepository;