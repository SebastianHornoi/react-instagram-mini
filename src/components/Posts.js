import './Posts.css'
import { useFetch} from '../custom_hooks/useFetch'
import {useState} from 'react'

export default function Posts() {
  const [url, setUrl] = useState('http://localhost:3000/posts')
  const { data: posts } = useFetch(url)

  return (
    <div className='posts__container'>
      {
        posts && posts.map((post) =>(
          <div className="singlePost__container">
             <div className="user__post">
               <img className='foto__user' src={post.foto} alt="" />
               <p><b>{post.nomeUtente}</b></p>
             </div>
             <div className="foto__post__container">
               <img className='foto__post' src={post.foto} alt="" />
             </div>
             <div className="action__post">
               <div className="like__comment__share">
               <img className='post__icons' src="./img/heart.png" alt="" />
               <img className='post__icons' src="./img/bubble-chat.png" alt="" />
               <img className='post__icons' src="./img/send.png" alt="" />
               </div>
               <img className='post__icons post-icons--mod' src="./img/bookmark.png" alt="" />
             </div>
             <div className="text__post">
                <p><b>piace a {post.like} persone</b></p>
                <p>{post.postContent}</p>
                <p className='text__ora'>{post.ora}</p>
             </div>
          </div>
        ))
      }
    </div>
  )
}
