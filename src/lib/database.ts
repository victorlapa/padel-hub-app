import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Account } from "../entities/Account";
import { Session } from "../entities/Session";
import { VerificationToken } from "../entities/VerificationToken";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "padel_hub",
  synchronize: process.env.NODE_ENV === "development",
  logging: process.env.NODE_ENV === "development",
  entities: [User, Account, Session, VerificationToken],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"],
});

// Initialize the database connection
export const initializeDatabase = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("Database connection established successfully");
    }
  } catch (error) {
    console.error("Error during database connection:", error);
    throw error;
  }
};