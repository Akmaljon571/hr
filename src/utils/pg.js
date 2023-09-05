import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

export const a = async (SQL, ...params) => {
    const client = new pg.Client({
        connectionString: "postgres://postgres:akmal@localhost/hr_bot",
    });
    try {
        await client.connect();
        const res = await client.query(SQL, params);
        return res?.rows || [];
    } catch (error) {
        console.log(error);
    } finally {
        await client.end();
    }
};
