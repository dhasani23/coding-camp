import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQs",
    rows: [
        {
            title: "How much do you charge?",
            content: "Attending CodingCamp costs $179 and it comes with six 60-75 minute long sessions (plus a catch-up session) where you learn fundamental coding skills through real-world projects, with all required materials provided.",
        },
        {
            title: "What does a typical session look like?",
            content: `A typical session is 60-75 minutes on Zoom, where David walks you through how to build an awesome project.`
        },
        {
            title: "What age group is this recommended for?",
            content: `We think this camp is best suited for students in grades 6th-8th (intro level) and 9th-12th (intro or advanced level), but feel free to contact us to hear David's specific recommendation for you!`
        },
        {
            title: "How can I contact you?",
            content: `CodingCamp can be reached through the "I'm interested" button above or via email: <b>davidhasani156</b>[at]<b>gmail</b>[dot]<b>com</b>`
        }
    ],
};

const styles = {
    bgColor: "rgba(52,52,52,alpha)",
    titleTextColor: "white",
    rowTitleColor: "rgba(255,255,255,1)",
    rowContentColor: "rgba(255,255,255,1)",
    arrowColor: "white",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

export default function App() {

    return (
        <div style={{maxWidth:900, display:"flex", width: "100%", justifyContent: "center", margin:"auto"}}>
            <br />
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
