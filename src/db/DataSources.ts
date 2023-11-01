    import { DataSource
        //, DataSourceOptions 
    } from "typeorm"
    import { PostgresConnectionOptions } from "../../node_modules/typeorm/driver/postgres/PostgresConnectionOptions";
    import pg from "pg";

    const postgresOptions: PostgresConnectionOptions = {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "fakepassword",
        database: "postgres",
        entities: ["./entity/*.ts", "./entity/**/*.ts"],
        driver: pg,
        synchronize: true
    };
    const PostgresDB = new DataSource(postgresOptions);
    export {
        PostgresDB
    }
