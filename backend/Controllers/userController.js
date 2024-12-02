const conn = require('../db'); 
const { promisify } = require('util');

class UserController {
    static getUserById = async (req, res) => {
        const emp_id = req.query.id;

        try {
            if (!emp_id) {
                return res.status(400).json({ error: "Employee ID is required" });
            }
            const query = promisify(conn.query).bind(conn);
            const data = await query(
                `SELECT emp.name, emp.email, dep.dept_name FROM employee AS emp INNER JOIN department AS dep ON emp.id = dep.employee_id WHERE emp.id = ?`, [emp_id]
            );
            res.status(200).json({
                success: true,
                data: data,
            });
        } catch (err) {
            console.error("Database error:", err);
            res.status(500).json({
                success: false,
                error: "An error occurred while fetching the user",
            });
        }
    };
}

module.exports = UserController;
