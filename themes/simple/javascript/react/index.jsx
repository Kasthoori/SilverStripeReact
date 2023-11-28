import React  from "react";
import { createRoot } from "react-dom/client";
import Page from './components/Page.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from "history";


async function fetchViewableData(){
    try{
        const path = document.location.pathname === '/' ? `${document.location}home` : document.location;
        const response = await fetch(`${path}/fetchViewableData`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });


        const body = await response.text();
        const result = JSON.parse(body);
        console.log('RESULT', result);
        return result;

    }catch(error) {
        console.log(error);
    }
}

const Window = () => {

    var navLinks = Array.from(document.querySelectorAll('header nav.primary > ul > li > a'));
    console.log("NAV LINK", navLinks)
    var formattedNavLinks = [];
    const baseUrl = 'www.testtwo.com';
    navLinks.forEach((link) => {
        var formattedNavLink = {};
        formattedNavLink.Title = link.innerText;
        var urlSegment = link.href !== location.hostname ? '/' + link.href.split('/').reverse()[0] : '/home';
        var test = link.href;
        console.log("URL SEGMENT", urlSegment)
        console.log("HOST NAME", location.hostname)
        formattedNavLink.URLSegment = urlSegment;
        formattedNavLink.pagetype = link.attributes.pagetype.value;
        formattedNavLinks.push(formattedNavLink);
        

    })

    return(
        <div className="window-component">
            <div className="nav">
                <ul className="main-nav-list">
                    {
                        // formattedNavLinks.map((link) => (
                        //     <li><a href={link.URLSegment}>{link.Title}</a></li>
                        // ))
                      formattedNavLinks.map((link) => (
                        <li key={formattedNavLinks.indexOf(link)} className="main-nav-list-item">
                            <Link to={link.URLSegment}>
                                {link.Title}
                            </Link>
                        </li>
                      ))}               
                 </ul>
            </div>
               
                    
                    {
                      formattedNavLinks.map((link) => (
                        <Routes>
                           <Route path={link.URLSegment} element={<Page fetchViewableData={fetchViewableData} /> } />
                        </Routes>
                      ))}       
                
    </div>
    );
}

const history = createBrowserHistory();

 const rootElement = document.getElementById("react-entry");
 const root = createRoot(rootElement);

root.render(
       <BrowserRouter>
           <Window />
       </BrowserRouter>
  );