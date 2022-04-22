const db = require("../config/database");


exports.createPost = async (req,res) =>{
     const { heading,text,user_id,type,cat,date } = req.body;
     const { rows } = await db.query(
         "INSERT INTO posts (heading,text,user_id,type,cat,date) VALUES ($1, $2, $3, $4, $5, $6)",
         [heading,text,user_id,type,cat,date]
     );
     res.status(201).send({
         message: "Post posted successfully!",
         body: {
           product: { heading,text,user_id,type,cat,date }
         },
       });
 };
 
exports.allPosts = async (req,res) =>{
     const response = await db.query('SELECT * FROM posts');
     res.status(200).send(response.rows);
 }

 exports.getPost = async (req, res) => {
    const {id} = req.params;
    try{
        const response = await db.query(`SELECT * FROM posts WHERE id='${id}'`);
        res.status(201).send({
            body:{
                name: response.rows
            }
        })
    }catch(err){
        console.log(err);
    }
}