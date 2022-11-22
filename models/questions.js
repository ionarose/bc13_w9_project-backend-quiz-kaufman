import query from "../db/index.js"


export async function getAllQuestions(){
    const allQuestions = await query("SELECT * FROM questions")
    return allQuestions.rows
}

//search by question topic
export async function getQuestionsByTopic(topic_id){
    const result = await query("SELECT * FROM questions WHERE question_id = $1", [`%${topic_id}%`])
    
    return result.rows
}

//get question by id
export async function getQuestionById(id){
    const questionByID = await query("SELECT * FROM questions WHERE question_id = $1", [id])
        
    return questionByID.rows[0]
}

 // create question
 export async function createQuestion(questions){
    const newQuestion = await query("INSERT INTO questions (question, answer, topic_id) VALUES ($1, $2, $3) RETURNING *", [questions.question, questions.answer, questions.topic_id])
   return newQuestion.rows
}

// Update question by id

 export async function updateQuestionById (id,updatedQuestion) {
    const update = await query  ('UPDATE questions SET  (question, answer, topic_id) = ($1, $2, $3,) WHERE question_id = $4 RETURNING * ', [updatedQuestion.question, updatedQuestion.answer, updatedQuestion.topic_id]);
    return update.rows
}

//Delete question 
export async function deleteQuestionById(id){
    const deletedQuesion = await query("DELETE FROM questions WHERE question_id = $1  RETURNING * ", [id])
    return deletedQuesion.rows[0]
}