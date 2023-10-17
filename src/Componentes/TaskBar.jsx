
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {GoPaperAirplane} from 'react-icons/go'
import {FiBookmark} from 'react-icons/fi'
import Icone from './Icone'
function TaskBar(){
   return(
    <div className="taskbar">
        <div className="icon">
         <Icone icone={<AiOutlineHeart/>}></Icone>
         <Icone icone={<FaRegComment/>}></Icone>
         <Icone icone={<GoPaperAirplane/>}></Icone>
        </div>
        <div className="save">
          <Icone icone={<FiBookmark/>}></Icone>
        </div>
       
    </div>
   )
}

export default TaskBar