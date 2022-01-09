import React from 'react'
import coverImage from '../../Assets/nature2.jpg'
import './PostDetails.css'

export default function PostDetails() {
    return (
        <div className='post-detail'>
           <div className="Detail-container">
               <img src={coverImage} alt="" className="coverImg" />
               <div className="PostEdit">
                   <i className="editIcon far fa-edit"></i>
                   <i className="deleteIcon far fa-trash-alt"></i>
               </div>
               <h1 className="post-title"> Lorem ipsum dolor sit amet consectetur </h1>
               
            <div className="post-info">
                <span className="author"><b>Belal Hossain</b></span>
                <span className="updateTime"> 1 hour ago</span>
            </div>
            <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nostrum, repellat dolorum facere quis voluptatibus enim et voluptatem iusto odit modi eos in quam eum ipsam? Dolorum dolor perspiciatis deleniti laudantium, mollitia, consequatur, alias corporis esse soluta quod optio aperiam error cum ut dignissimos reprehenderit eos debitis aut harum voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aut culpa ea voluptatibus illo corporis praesentium, consequatur pariatur debitis, quos fugit ab libero. Id ex animi vitae quidem cum atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut totam est pariatur nesciunt quaerat, temporibus commodi quidem cumque voluptatum unde, non soluta labore! Adipisci libero earum id voluptates! Quam, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque nesciunt. Unde aperiam tempora, saepe praesentium beatae suscipit? Quam dicta aspernatur eaque! Molestiae, aliquid? Maiores ut unde cupiditate fugit delectus sit quisquam expedita, culpa, aliquid explicabo, illum eligendi similique magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla. Non asperiores recusandae corporis tempora officiis reiciendis ipsum autem magni esse fugiat vero voluptates nesciunt facere doloremque error perferendis, reprehenderit, a distinctio rem magnam repellendus id! Distinctio minus incidunt magni.</p>
           </div>
        </div>
    )
}
