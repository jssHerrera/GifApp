import React from 'react'
import { Link } from "wouter";
import "./ListOfGifs.css";
const ListOfGifs = React.memo(({ images }) => {
  return (
    <div className="ListOfGifs">
      {images.map(({ id, title, imges }) => (
        <div key={id} className="Gif">
          <Link to={`/gif/${id}`} className="Gif-link">
            <h4>{title}</h4>
            <img loading="lazy" alt={title} src={imges} />
          </Link>
        </div>
      ))}
    </div>
  );
});

export default ListOfGifs;

// masonry-1-col sm:masonry-2-col md:masonry-3-col lg:masonry-4-col
// columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28

// <div className="masonry-1-col sm:masonry-2-col md:masonry-3-col lg:masonry-4-col">
//       {images.map(({ id, title, imges }) => (
//         <div key={id} className="relative ">
//           <div className="absolute z-30 bg-blur rounded-t-lg top-0 w-full text-center p-2 whitespace-nowrap overflow-ellipsis overflow-hidden text-white">
//             <span>{title}</span>
//           </div>
//           <Link href={`/gif/${id}`}>
//             <img
//               className="w-full rounded-lg trasf break-inside mb-3 break-inside hover:cursor-pointer"
//               src={imges}
//               alt={title}
//               loading="lazy"
//             />
//           </Link>
//         </div>
//       ))}
//     </div>
