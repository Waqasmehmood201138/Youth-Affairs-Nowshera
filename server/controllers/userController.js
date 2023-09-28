const bcrypt = require('bcrypt');
const User = require('../models/userModel')

//register controller
const registerController = async(req,res)=>{
    const { name , email ,password } = req.body;
    try {
                   if(!name || !email || !password) {
                       throw Error('please fill all the fields')
                   }

                //    password hashing
                  const isExistUser = await User.findOne({email});
                 if(isExistUser){
                    throw Error('User already exists Please Sign-in');
                 }

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);

                    const newUser = await new User({
                       name,
                       email,
                       password:hashedPassword
                   });

                   await newUser.save();
                   return res.status(200).send({message:"User Regestered successfully"});

                }
                   catch(error){
                    return res.status(400).json({message:error.message});
                   }


       }
       //login controller         
       const loginController = async(req,res)=>{
           const { email,password } = req.body;
           try {

               if(!email ||!password) {
                   throw Error('please fill all the fields')
               }
               const isExistUser = await User.findOne({ email});
               if(!isExistUser){
                   throw Error('User not found Please first Sign Up');
               }
               //comparing password
               const isMatch = await bcrypt.compare(password,isExistUser.password);
               if(!isMatch){
                   throw Error('Password or Email is Invalid');
               }

               return res.status(200).send({message:"User Logged in successfully"});


            }
            catch(error){
                return res.status(400).json({message:error.message});
            }
        
        }
 module.exports = {registerController , loginController}
