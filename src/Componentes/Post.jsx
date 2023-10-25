<<<<<<< HEAD
import {AiOutlineHeart} from 'react-icons/ai' 
import {TbMessageCircle2} from 'react-icons/tb'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {FiBookmark} from 'react-icons/fi'
import {GoSmiley} from 'react-icons/go'

function Post(props){
   return(
     <div className="post">
        <div className="headerpost">
           <div className="postUser">
             <div className="borderpost">
              <img src={props.img} alt="" />
            </div>
            <p>{props.usuario}</p>
            <li>{props.tempo}</li>
           </div>
           <h2>...</h2>
        </div>
        <div className="publicacao">
           <img src={props.post} alt="" />
        </div>
        <div className="taskBar">
            <div className="itemtaskleft">
               <li><AiOutlineHeart/></li>
               <li><TbMessageCircle2/></li>
               <li><IoPaperPlaneOutline/></li>
            </div>
               <li><FiBookmark/></li>
        </div>
        <div className="likes">
           <p>{props.likes} likes</p>
        </div>
        <div className="descricao">
          <p className='negrito'>{props.usuario}</p>
          <p className='texto'>{props.texto}</p>
        </div>
        <div className="comentarios">
            <p>Ver todos os {props.comentarios} comentários</p>
        </div>
        <div className="comentar">
          <input type="text" name="" id="" placeholder='Adicionar um comentário...'/>
          <li><GoSmiley/></li>
        </div>
     </div>
   )
}

=======
import {AiOutlineHeart} from 'react-icons/ai' 
import {TbMessageCircle2} from 'react-icons/tb'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {FiBookmark} from 'react-icons/fi'
import {GoSmiley} from 'react-icons/go'

function Post(props){
   return(
     <div className="post">
        <div className="headerpost">
           <div className="postUser">
             <div className="borderpost">
              <img src={props.img} alt="" />
            </div>
            <p>{props.usuario}</p>
            <li>{props.tempo}</li>
           </div>
           <h2>...</h2>
        </div>
        <div className="publicacao">
           <img src={props.post} alt="" />
        </div>
        <div className="taskBar">
            <div className="itemtaskleft">
               <li><AiOutlineHeart/></li>
               <li><TbMessageCircle2/></li>
               <li><IoPaperPlaneOutline/></li>
            </div>
               <li><FiBookmark/></li>
        </div>
        <div className="likes">
           <p>{props.likes} likes</p>
        </div>
        <div className="descricao">
          <p className='negrito'>{props.usuario}</p>
          <p className='texto'>{props.texto}</p>
        </div>
        <div className="comentarios">
            <p>Ver todos os {props.comentarios} comentários</p>
        </div>
        <div className="comentar">
          <input type="text" name="" id="" placeholder='Adicionar um comentário...'/>
          <li><GoSmiley/></li>
        </div>
     </div>
   )
}

>>>>>>> bca7dbca5be92d075914cb3204075b2fb3195579
export default Post