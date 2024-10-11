import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config"; // Ensure this is correctly importing your users service

export const createUser = async (user: CreateUserParams) => {
    try {
        // Creating a new user with Appwrite
        const newUser = await users.create(
            ID.unique(),         // Unique User ID
            user.email,          // User Email
            user.phone,          // User Password (this should be user.password)
            user.name            // User Name
        );
        
        return newUser;          // Return the newly created user

    } catch (error: any) {
        if (error && error?.code === 409) {  // Check if email already exists
            // List users where email matches the one provided
            const existingUsers = await users.list([
                Query.equal('email', user.email)
            ]);

            return existingUsers.total > 0 ? existingUsers.users[0] : null;  // Return first match
        } else {
            throw error;  // Throw other errors
        }
    }
};
