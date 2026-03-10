import * as userService from "../services/user.service.js";

export const getUsers = async (req,res)=>{

  const users = await userService.getAllUsers();

  res.json(users);

};

export const addUser = async (req,res)=>{

  const user = await userService.createUser(req.body);

  res.json(user);

};

export const updateUser = async (req,res)=>{

  const user = await userService.updateUser(
    req.params.id,
    req.body
  );

  res.json(user);

};

export const deleteUser = async (req,res)=>{

  await userService.deleteUser(req.params.id);

  res.json({message:"User Deleted"});

};