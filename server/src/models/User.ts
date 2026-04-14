// User model interface

interface User {
    email: string;
    password: string;
    username: string;
    profile: string;
    createdAt: Date;
    updatedAt: Date;
}

export default User;