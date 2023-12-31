export const findClient = "select * from client where id = $1"
export const findFillialID = "select * from fillial where id = $1"
export const findVakansiyaID = "select * from vakansiya where id = $1"
export const allFillial = "select * from fillial"
export const findFillial = "select * from fillial where shahar = $1"
export const findIdVakansiya = "select * from vakansiya where fillial = $1"
export const vakansiyaId = "select * from vakansiya where vakansiya = $1"
export const findVakansiya = "SELECT * from fillial f JOIN vakansiya v on v.fillial = f.id where f.shahar = $1"
export const create = "INSERT INTO client(id) values($1);"
export const ismi = "UPDATE client SET ism = $1 where id = $2"
export const age = "UPDATE client SET age = $1 where id = $2"
export const nomer = "UPDATE client SET number = $1 where id = $2"
export const qayer = "UPDATE client SET qayer = $1 where id = $2"
export const talaba = "UPDATE client SET talaba = $1 where id = $2"
export const vaqt = "UPDATE client SET vaqt = $1 where id = $2"
export const vakansiya = "UPDATE client SET vakansiya = $1 where id = $2"
export const fillial = "UPDATE client SET fillial = $1 where id = $2"
export const createFillial = "INSERT INTO fillial(shahar) values($1);"
export const createVakansiya = "INSERT INTO vakansiya(vakansiya, fillial) values($1, $2);"
export const deleteFillial = "DELETE from fillial where shahar = $1"
export const deleteVakansiya = "DELETE from vakansiya where vakansiya = $1"

/*
    CREATE TABLE client (
        id text PRIMARY KEY NOT NULL,
        ism text,
        age int,
        number bigInt,
        qayer text,
        talaba text,
        vaqt text,
        vakansiya int,
        FOREIGN KEY (vakansiya) REFERENCES vakansiya(id) ON DELETE SET NULL,
        fillial int,
        FOREIGN KEY (fillial) REFERENCES fillial(id) ON DELETE SET NULL
    );

    CREATE TABLE fillial (
        id SERIAL PRIMARY KEY,
        shahar text
    );

    CREATE TABLE vakansiya (
        id SERIAL PRIMARY KEY,
        vakansiya text,
        fillial int,
        FOREIGN KEY (fillial) REFERENCES fillial(id) ON DELETE CASCADE
    );

    INSERT INTO fillial(shahar) values('Toshkent Shahar');
    
    INSERT INTO vakansiya(vakansiya, fillial) values('Kassir', 1);
    INSERT INTO vakansiya(vakansiya, fillial) values('Farrosh', 1);
    INSERT INTO vakansiya(vakansiya, fillial) values('Hizmat Korsatuvchi', 1);
    INSERT INTO vakansiya(vakansiya, fillial) values('Konditer', 1);
*/ 