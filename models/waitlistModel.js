const db = require('../config/db');

const createWaitlist = async(data) => {

    const query = `
    INSERT INTO waitlist
    (full_name,email,business_name,phone)
    VALUES ($1,$2,$3,$4)
    RETURNING *`;

    const values = [
        data.full_name,
        data.email,
        data.business_name,
        data.phone
    ];

    const result = await db.query(query, values);

    return result.rows[0];
};

const getCount = async() => {

    const result = await db.query(
        'SELECT COUNT(*) FROM waitlist'
    );

    return result.rows[0];
};

module.exports = {
    createWaitlist,
    getCount
};