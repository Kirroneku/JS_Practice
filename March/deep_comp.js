export default function deepComp( obj1, obj2 ) {
    if(typeof obj1 == "object" && typeof obj2 == "object") {
        for( let property in obj1 ) {
            if(typeof obj1[property] === "object" && typeof obj2[property] === "object") {
                if(!deepComp(obj1[property], obj2[property])){
                    return false;
                }
            } else if( obj1[property] != obj2[property] ) {
                return false;
            }
        }
    } else if(obj1 !== obj2 ) {
        return false;
    }

    return true;
}


console.log(deepComp(obj1, obj2));
