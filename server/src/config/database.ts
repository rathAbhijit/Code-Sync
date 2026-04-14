// Import the MongoDB client
import { MongoClient } from 'mongodb';

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'yourDatabaseName';

// Create a new MongoClient
const client = new MongoClient(url);

async function connect() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected successfully to MongoDB server');
        // Create a database object
        const db = client.db(dbName);
        return db;
    } catch (err) {
        console.error('Connection failed:', err);
    }
}

export { connect };