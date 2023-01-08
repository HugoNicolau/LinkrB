import dayjs from "dayjs";
import { db } from "../database/database.js";

export async function generateDate () {
    const date = dayjs();

    const day = Number(date.format('DD'));
    const month = Number(date.format('MM'));
    const year = Number(date.format('YYYY'));
    const week = date.format('dddd');
    const time = date.format(`HH:mm:ss`);

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