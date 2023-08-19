import React, {forwardRef} from 'react';
import './Posts.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

const Posts = forwardRef(({ name, description, 
  message, photoUrl 
}, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
        <InputOption Icon={ThumbUpIcon} title='Like' color='gray' />
        <InputOption Icon={CommentIcon} title='Comment' color='gray' />
        <InputOption Icon={RepeatIcon} title='Repost' color='gray' />
        <InputOption Icon={SendIcon} title='Send' color='gray' />
      
      </div>
      
    </div>

 
  );
})

export default Posts;
