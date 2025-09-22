import { AppDataSource, initializeDatabase } from './database';
import { User } from '@/entities/User';

export interface UserData {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export async function trackUserLogin(user: {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}) {
  try {
    if (!user.id || !user.email) {
      console.error('Cannot track user login: missing user ID or email');
      return;
    }

    // Ensure database is initialized
    await initializeDatabase();

    const userRepository = AppDataSource.getRepository(User);

    // Check if user exists
    let existingUser = await userRepository.findOne({
      where: { email: user.email }
    });

    if (existingUser) {
      // Update existing user
      existingUser.name = user.name || existingUser.name;
      existingUser.image = user.image || existingUser.image;
      await userRepository.save(existingUser);
      return existingUser;
    } else {
      // Create new user
      const newUser = userRepository.create({
        email: user.email,
        name: user.name,
        image: user.image,
        elo: 1000
      });
      await userRepository.save(newUser);
      return newUser;
    }
  } catch (error) {
    console.error('Error tracking user login:', error);
    throw error;
  }
}