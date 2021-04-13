import React from 'react';

export default (assetPath)=>{
    return process.env.PUBLIC_URL+assetPath;
}

// export default function
// publicUrl(assetPath){
//     return
// assetPath.startsWith('/')?
// process.env.PUBLIC_URL+
// assetPath : assetPath;
// }