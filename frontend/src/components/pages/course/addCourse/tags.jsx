import React, {useEffect, useState} from 'react';
import { TagsInput } from "react-tag-input-component";



const ReactTagsInput =()=> {

  const [tags, setTags] = useState(["jquery","bootstrap"]);



        return (
            <div>
                  <TagsInput
                  tags={tags}
                  value={tags}
                  />
            </div>
        )
    }

 
export default ReactTagsInput;