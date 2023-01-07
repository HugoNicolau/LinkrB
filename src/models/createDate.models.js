import db from "../database/database.js";

export async function generateDate () {
    const weekNum = date.week();
    const hour = String(date.getHours()).length = 1 ? `0${date.getHours()}` : date.getHours();
    const minutes = String(date.getMinutes()).length = 1 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = String(date.getSeconds()).length = 1 ? `0${date.getSeconds()}` : date.getSeconds();

    const date = new Date();
    const day = date.getDay() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const week = weekday(weekNum);
    const time = `${hour}:${minutes}:${seconds}`

    await db.query(`INSERT INTO dates (day, month, year, week, time) VALUES ($1, $2, $3, $4, $5);`, [day, month, year, week, time]);
    const dates = await db.query(`SELECT id FROM dates ORDER BY id DESC`)
    const date_id = dates.rows[0];

    return date_id;
}

function weekday(day) {
    switch(day) {
        case 1:
            return 'sunday';
        case 2:
            return 'monday';
        case 3:
            return 'tuesday';
        case 4:
            return 'wednesday';
        case 5:
            return 'thrusday';
        case 6:
            return 'friday';
        case 7:
            return 'saturday';
        default:
            return 'invalid';
    }
}