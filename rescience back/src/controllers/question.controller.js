const db = require("../config/database");


exports.createQuestion = async (req,res) =>{
     const { question,otvets,user_id,post_id } = req.body;
     const { rows } = await db.query(
         "INSERT INTO questions (question,otvets,user_id,post_id ) VALUES ($1, $2, $3, $4)",
         [question,otvets,user_id,post_id ]
     );
     res.status(201).send({
         message: "Post posted successfully!",
         body: {
           product: { question,otvets,user_id,post_id  }
         },
       });
 };
 
exports.allQuestions = async (req,res) =>{
     const response = await db.query('SELECT * FROM questions ORDER BY created_at DESC');
     res.status(200).send(response.rows);
 }

 exports.getQuestion = async (req, res) => {
    const {post_id} = req.params;
    try{
        const response = await db.query(`SELECT * FROM questions WHERE post_id='${post_id}'`);
        res.status(201).send({
            body:{
                name: response.rows
            }
        })
    }catch(err){
        console.log(err);
    }
}