import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL·E routes' });
});

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    const image = await openai.images.generate({
      model: 'gpt-image-1',
      prompt,
      size: '1024x1024',
    });

    res.status(200).json({
      photo: image.data[0].b64_json,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
