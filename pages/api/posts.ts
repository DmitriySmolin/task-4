// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {NextApiRequest, NextApiResponse} from 'next';
import posts from './_posts/posts.json';
import {IPost} from "../../types/types";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPost[]>
) {
  if (req.method === 'GET') { // @ts-ignore
    res.status(200).json(posts);
  }
}
