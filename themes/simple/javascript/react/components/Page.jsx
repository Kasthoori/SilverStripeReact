import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

const Page = (props) => {

    const initialState = {
        Content: '<p></p>',
        siteConfig_SocialLinks: []
    }

    const [ Content, setContent] = useState(initialState);

    useEffect(() => {

       loadviewableData()

    }, []);

    async function loadviewableData(){
        const data = await props.fetchViewableData();
        
        if(data){
            let parsedContent = '<p></p>';
            let sociallink = '';
            console.log('DATA', data)
            if(data.content){
               parsedContent = data.content.replace(/\[image(.*)\]/, '<img $1 />');
            }

            setContent({
                Content: parsedContent,
                siteConfig_SocialLinks: data.SiteConfig_SocialLinks
            })
            
            
        }
    }

    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: Content.Content}}></div>

            {Content.siteConfig_SocialLinks.length > 0 ?
                    <ul className="social_banner">
                        {
                            Content.siteConfig_SocialLinks.map((social) => { 
                              return(  <li key={social.ID}>
                                    {/* <a href={social.Link}> */}
                                        <SocialIcon url={social.Link} style={{width: 20, height: 20}} />
                                    {/* </a> */}
                                </li>
                              )
                         })
                          

                        }
                    </ul>
                   :
                   ''
            }
           
        </div>
    );
}

export default Page;