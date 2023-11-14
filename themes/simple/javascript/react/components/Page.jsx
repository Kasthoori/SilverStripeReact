import React, { useEffect, useState } from "react";

const Page = (props) => {

    const [ content, setContent] = useState('');

    useEffect(() => {

        loadviewableData();

    }, []);

    async function loadviewableData(){
        const data = await props.fetchViewableData();
        if(data){
            let parsedContent = '<p></p>';
            if(data.content){
                parsedContent = data.content.replace(/\[image(.*)\]/, '<img $1 />');

            }

            setContent(parsedContent)
        }
        console.log('CONTENT', content)
    }

    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    );
}

export default Page;