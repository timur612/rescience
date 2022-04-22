const db = require("../config/database");

exports.createUser = async (req,res) => { // исправить условие, если акк уже создан
    const {name,surename,nickname,email,password } = req.body;

    // const hashedPassword = await hash(password);
    
    try{
       const response = await db.query(`SELECT id FROM users WHERE email='${email}'`);
       if(response.rows.length==0){
           const { rows } = await db.query(
               "INSERT INTO users (name,surename,nickname,email,password ) VALUES ($1, $2, $3, $4, $5)",
               [name,surename,nickname,email,password ]
           );
       
   
           res.status(201).send({
               message: "user registered successfully!",
               body: {
                 product: {name,surename,nickname,email,password }
               },
             });
        }else{
            res.status(409).send({
                message:"user already exists",
            })
        }
    }catch(err){
        console.log(err);
    }
};

exports.logInUser = async (req,res) => {
    const {email,password} = req.body;
    try{
        const response = await db.query(`SELECT id FROM users WHERE email='${email}'`);
        const pass = await db.query(`SELECT password FROM users WHERE email='${email}'`);
        if(response.rows.length > 0){
            if(pass.rows[0].password==password){
                res.status(201).send({
                    message: "user logged in",
                    body:{
                        id: response.rows[0].id
                    }
                });
            }else{
                res.status(409).send({
                    message: "wrong pass or email",
                    body:{
                        pass:pass.rows[0].password
                    }
                });
            }
        }else{
            res.status(404).send({
                message: "wrong email",
            });
        }
    }catch(err){
        console.log(err);
    }
}

exports.getUser = async (req, res) => {
    const {id} = req.params;
    try{
        const response = await db.query(`SELECT * FROM users WHERE id='${id}'`);
        res.status(201).send({
            body:{
                name: response.rows[0]
            }
        })
    }catch(err){
        console.log(err);
    }
}