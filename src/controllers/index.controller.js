const { Pool } = require("pg")
const pool = new Pool({
	host: "localhost",
	user: "api_admin",
	password: "mmm",
	database: "ts_api"

});

const getMentors = async (req, res) => {
	const response = await pool.query("SELECT * FROM mentors");
	res.status(200).json(response.rows)
}

const getMentorById = async (req, res) => {
	const id = req.params.mentorId
	const response = await pool.query("SELECT * from mentors where mentor_id = $1", [id])
	res.json(response.rows)
}

const createMentor = async (req, res) => {
	const { first_name, last_name, email } = req.body
	const response = await pool.query("INSERT INTO mentors (first_name, last_name, email) VALUES ($1, $2, $3)",
	[first_name, last_name, email])
	res.json({
		Message: "Mentor Added Succesfully",
		body: {
			mentor: { first_name, last_name, email}
		}

	})
}

const updateMentorById = async (req, res) => {
	const id = req.params.mentorId
	const { first_name, last_name, email } = req.body
	const response = await pool.query("UPDATE mentors SET first_name = $1, last_name = $2, email = $3",
	[first_name, last_name, email])
	console.log(response)
	res.json('User Updated Successfully')
}

const deleteMentorById = async (req, res) => {
	const id = req.params.mentorId
	const response = await pool.query("DELETE FROM mentors WHERE mentor_id = $1", [id])
	console.log(response)
	res.json("User ${id} deleted succesfully ")
}

module.exports = {
	getMentors, createMentor, getMentorById,
	deleteMentorById, updateMentorById
}