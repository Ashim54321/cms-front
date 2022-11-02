import { Blockquote } from '@mantine/core';

export default function NoticeCard(props:any) {
  return (
    <div className='Show-question'>
    <Blockquote cite={`- ${props.UserName}`}>
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
    </div>
  
  );
}