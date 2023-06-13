import mongoose from 'mongoose';

export const dbConnect = () => {
  const uri = `mongodb+srv://sofiasama89:1234@cluster0.hbqvi6r.mongodb.net/?retryWrites=true&w=majority`;
  console.log(uri);
  return mongoose.connect(uri);
};
