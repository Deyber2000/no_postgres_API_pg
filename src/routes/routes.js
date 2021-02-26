const { Router } = require("express")
const router =  Router();
const { getMentors, createMentor,
	getMentorById, deleteMentorById, updateMentorById } = require("../controllers/index.controller")

//all mentors data
router.get("/api/info/mentors", getMentors)
router.post("/api/info/mentors", createMentor)
//all companies data
router.get("/api/info/companies", )
//schedule data
router.get("/api/schedule")
//mentor data by id
router.get("/api/info/mentors/:mentorId", getMentorById)
router.delete("/api/info/mentors/:mentorId", deleteMentorById)
router.put("/api/info/mentors/:mentorId", updateMentorById)
//company data by id
router.get("/api/api/companies/:companyId")
router.post("/api/api/companies/:companyId")
//matches data
router.get("/api/matches")

module.exports =  router;